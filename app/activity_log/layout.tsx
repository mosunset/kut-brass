import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import '../globals.css'



export const metadata: Metadata = {
    title: 'Activity Log | KUT WINDBRASS',
    description: '高知工科大学 吹奏楽部 KUT WINDBRASS のWEBページです',
}

export default function ActivityLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
        </div>
    )
}
