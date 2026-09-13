import { useEffect, useRef, useState } from "react"

export default function LiveImage({ imageUrl, alt } : { imageUrl: string; alt: string }) {
    const imageRef = useRef(null)
    const [timestamp, setTimestamp] = useState<number>(Date.now())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimestamp(Date.now())
        }, 60 * 1000)

        return () => clearInterval(intervalId)
    }, [])

    const src = `${imageUrl}${imageUrl.includes('?') ? '&' : '?'}_t=${timestamp}`

    return (
        <img
            ref={imageRef}
            src={src}
            alt={alt}
            style={{ width: "100%", height: "100%", objectFit: "contain", maxWidth: "100%" }}
        />
    )
}