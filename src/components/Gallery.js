import React, { useState } from 'react'
import photos from '../assets/photos.js'

export default function Gallery() {
    const [gallery] = useState(photos)

    return (
        <div className="gallery">
            {gallery.map(photo => {
                return (
                    <div key={photo.id} className="gallery__photo" id={`gallery__photo-${photo.id}`}>
                        <img src={require(`../assets/img/${photo.img}`)} alt={photo.title} className="gallery__img" />
                    </div>
                )
            })}
        </div>
    )
}
