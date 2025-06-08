// app/components/RepositoryCard.jsx
"use client";
import React, { useState } from 'react';

export default function RepositoryCard({ repo }) {
  const initialImg = repo.readmeImageUrl || repo.owner.avatar_url;
  const [imgSrc, setImgSrc] = useState(initialImg);

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="card h-96 flex flex-col border rounded-lg shadow hover:shadow-lg transition p-4">
        <img
          src={imgSrc}
          alt={`${repo.name} project image`}
          className="w-full h-48 object-contain rounded mb-4"
          onError={() => {
            setImgSrc(repo.owner.avatar_url);
          }}
        />
        <h2 className="text-xl font-semibold">{repo.name}</h2>
        {repo.description && (
          <p className="text-gray-600 mt-2 overflow-hidden text-ellipsis line-clamp-3">
            {repo.description}
          </p>
        )}
      </div>
    </a>
  );
}
