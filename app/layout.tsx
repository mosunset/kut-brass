import type { Metadata } from 'next'
import { M_PLUS_Rounded_1c } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'

const rounded = M_PLUS_Rounded_1c({
    weight: ["400", "500"],
    subsets: ["latin"],
    display: "swap",
})

export const metadata: Metadata = {
    title: '吹奏楽部 KUT WINDBRASS',
    description: '高知工科大学 吹奏楽部 KUT WINDBRASS のWEBページです',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css" />
            </head>
            <body className={rounded.className}>
                <header>
                    <div>
                        <Link href="/">

                            <Image src="/brass_logo.png" width={40} height={40} alt={'brass logo'} />
                            <span>吹奏楽部 KUT <wbr/>WINDBRASS</span>
                        </Link>
                        <button type="button" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation"><span></span></button>
                        <div id="navbarSupportedContent">
                            <ul>
                                <li><Link href="/">ホーム</Link></li>
                                <li><Link href="/concert">演奏情報</Link></li>
                                <li><Link href="/activity">活動記録</Link></li>
                                <li><Link href="/links">SNS等</Link></li>
                                <li><Link href="/contact">お問い合わせ</Link></li>
                            </ul>
                        </div>
                    </div>
                </header>
                {children}
                <footer>
                    <div>
                        <Link href="/">
                            <Image src="/brass_logo.png" width={40} height={40} priority alt={''} />
                            <span>吹奏楽部KUT WINDBRASS</span>
                        </Link>
                        <ul>
                            <li>
                                <a href="https://www.kochi-tech.ac.jp/campus_life/activities/culture-club/-wind-brass-1.html" target="_blank" rel="noopener noreferrer">
                                    <Image src="/kut_logo.png" width={20} height={20} priority alt={''} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/kutwindbrass/" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/windbrass_kut" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://peing.net/ja/windbrass_kut" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-box-seam"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/user/KUTWINDBRASS" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-youtube"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/windbrass/" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="http://wbrass.blog64.fc2.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-newspaper"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </body>
        </html>
    )
}
