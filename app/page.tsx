import Image from 'next/image'

export default function Home() {
    return (
        <main className="max-w-7xl w-full mx-auto mt-0 px-4 sm:px-6 lg:px-8">
            <div>
                <div>
                    <div>
                        <div>
                            <div><Image src="/homeslide/0.jpg" alt="slide写真0" width={1312} height={752} /></div>
                            <div><Image src="/homeslide/1.jpg" alt="slide写真1" width={1312} height={752} /></div>
                            <div><Image src="/homeslide/2.jpg" alt="slide写真2" width={1312} height={752} /></div>
                            <div><Image src="/homeslide/3.jpg" alt="slide写真3" width={1312} height={752} /></div>
                            <div><Image src="/homeslide/4.jpg" alt="slide写真4" width={1312} height={752} /></div>
                            <div><Image src="/homeslide/5.jpg" alt="slide写真5" width={1312} height={752} /></div>
                            <div><Image src="/homeslide/6.jpg" alt="slide写真6" width={1312} height={752} /></div>
                        </div>
                    </div>
                    <h1 title="高知工科大学 吹奏楽部">
                        WIND BRASS<br />Kochi University of Technology
                    </h1>
                </div>
            </div>
            <div>
                <div>
                    <h1>音楽をみんなで楽しむ！</h1>
                    <div>
                        <p>
                            吹奏楽部WIND BRASSは「音楽のジャンルにとらわれない新しい音楽団体」としてクラシック、ポップス、ジャズ、演歌など様々なジャンルを演奏しています。大きな演奏会として、10月位に行われるオータムコンサート、2月末に行われる定期演奏会があります。また、大学祭やクリスマスのイベント、老人ホーム、公園、公民館など様々な場所で活動しています。アンサンブルコンテストなどの大会にて行っており、地域に愛されるバンドを目指して日々活動中です。
                        </p>
                        <p>メンバーは大学から始めた初心者や経験者も沢山います。随時部員募集中!! ぜひ見学に来てください!!</p>
                    </div>
                </div>
                <h2>吹奏楽部の情報</h2>
                <div>
                    <div>
                        <div>
                            <i className="bi bi-clock"></i>
                        </div>
                        <div>
                            <h2>時間</h2>
                            <p>毎週 水・金・日 18:00~21:00</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <i className="bi bi-pin-map"></i>
                        </div>
                        <div>
                            <h2>場所</h2>
                            <p>高知工科大学講堂</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <i className="bi bi-question"></i>
                        </div>
                        <div>
                            <h2>その他</h2>
                            <p>設立 : 1998年<br />部員数 : 44人<br />部費 : 1,000円/月</p>
                        </div>
                    </div>
                </div>
                <iframe src="https://calendar.google.com/calendar/embed?title=windbrass%E4%BA%88%E5%AE%9A%E8%A1%A8&amp;showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;height=260&amp;wkst=1&amp;bgcolor=%23ff9966&amp;src=kutwindbrass%40gmail.com&amp;color=%232952A3&amp;ctz=Asia%2FTokyo" width="100%" height="250px"></iframe>
            </div>
        </main>
    )
}
