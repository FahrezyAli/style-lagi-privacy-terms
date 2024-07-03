import classNames from 'classnames';
import styles from './privacy.module.scss';

export interface AboutProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Privacy = ({ className }: AboutProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.text}>
                <div className={styles.title}>Kebijakan Privasi</div>
                <div className={styles.paragraph}>
                    Informasi yang Kami Kumpulkan:
                    <ol className={styles['list-number']}>
                        <li>
                            Informasi yang Anda Berikan:
                            <ul>
                                <li>
                                    Nama, alamat email, nomor telepon, alamat pengiriman, dan
                                    informasi lain yang Anda berikan saat mendaftar atau menggunakan
                                    aplikasi.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Informasi yang Dikumpulkan Secara Otomatis:
                            <ul>
                                <li>
                                    Informasi perangkat (model perangkat, sistem operasi, dll.).
                                </li>
                                <li>
                                    Informasi penggunaan (halaman yang dilihat, waktu yang
                                    dihabiskan di aplikasi, dll.).
                                </li>
                                <li>Data lokasi, jika Anda memberikan izin.</li>
                            </ul>
                        </li>
                        <li>
                            Informasi dari Sumber Lain:**
                            <ul>
                                <li>
                                    Informasi dari pihak ketiga seperti media sosial, mitra, atau
                                    layanan analitik.
                                </li>
                            </ul>
                        </li>
                    </ol>
                    Bagaimana Kami Menggunakan Informasi Anda
                    <p>Kami menggunakan informasi yang kami kumpulkan untuk:</p>
                    <ul className={styles['list-point']}>
                        <li>Menyediakan, mengoperasikan, dan memelihara aplikasi.</li>
                        <li>Meningkatkan, mempersonalisasi, dan memperluas aplikasi.</li>
                        <li>Memahami dan menganalisis bagaimana Anda menggunakan aplikasi.</li>
                        <li>Mengembangkan produk, layanan, fitur, dan fungsionalitas baru.</li>
                        <li>
                            Berkomunikasi dengan Anda, baik langsung maupun melalui salah satu mitra
                            kami, termasuk untuk layanan pelanggan, memberikan pembaruan dan
                            informasi lainnya terkait aplikasi, serta untuk tujuan pemasaran dan
                            promosi.
                        </li>
                        <li>
                            Memproses transaksi dan mengirimkan informasi terkait, termasuk
                            konfirmasi pembelian dan tagihan.
                        </li>
                        <li>
                            Menyediakan konsultasi desain produk upcycling yang eksklusif bersama
                            desainer lokal berbakat.
                        </li>
                        <li>
                            Mengirimkan email berkala, termasuk buletin, penawaran promosi, dan
                            informasi lainnya yang mungkin menarik bagi Anda.
                        </li>
                        <li>
                            Mendeteksi dan mencegah penipuan serta mengatasi masalah keamanan
                            lainnya.
                        </li>
                    </ul>
                    Bagaimana Kami Membagikan Informasi Anda
                    <p>Kami dapat membagikan informasi Anda dengan:</p>
                    <ul className={styles['list-point']}>
                        <li>Penyedia layanan yang membantu kami mengoperasikan aplikasi.</li>
                        <li>
                            Mitra bisnis, untuk menawarkan produk dan layanan terkait, termasuk
                            desainer lokal yang bekerja sama dengan kami.
                        </li>
                        <li>
                            Pihak ketiga lainnya jika kami diwajibkan oleh hukum atau jika kami
                            percaya bahwa tindakan tersebut diperlukan untuk mematuhi hukum atau
                            untuk melindungi keamanan, properti, atau hak orang lain.
                        </li>
                    </ul>
                    Keamanan Informasi Anda
                    <p>
                        Kami mengambil langkah-langkah yang wajar untuk melindungi informasi Anda 
                        dari akses, penggunaan, atau pengungkapan yang tidak sah. Namun, tidak ada 
                        metode transmisi melalui internet atau metode penyimpanan elektronik yang 
                        sepenuhnya aman, sehingga kami tidak dapat menjamin keamanan absolut.
                    </p>
                    Hak Anda
                    <p>Tergantung pada yurisdiksi Anda, Anda mungkin memiliki hak untuk:</p>
                    <ul className={styles['list-point']}>
                        <li>Mengakses dan mendapatkan salinan informasi pribadi Anda.</li>
                        <li>Meminta perbaikan atau penghapusan informasi pribadi Anda.</li>
                        <li>Menolak pemrosesan informasi pribadi Anda.</li>
                        <li>Membatasi pemrosesan informasi pribadi Anda.</li>
                    </ul>
                    Penggunaan Layanan Google Play
                    <p>
                    Kami mematuhi persyaratan privasi yang ditetapkan oleh Google Play. Informasi 
                    yang dikumpulkan oleh aplikasi kami dapat digunakan oleh Google untuk tujuan yang 
                    dijelaskan dalam Kebijakan Privasi Google. Anda dapat mempelajari lebih lanjut 
                    tentang bagaimana Google mengumpulkan dan menggunakan data Anda dengan mengunjungi
                    {' '}
                    <a className={styles['a']} href='https://policies.google.com/privacy'>Kebijakan Privasi Google</a>.
                    </p>
                    Perubahan pada Kebijakan Privasi ini
                    <p>
                        Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Jika kami membuat 
                        perubahan material, kami akan memberi tahu Anda dengan memposting kebijakan privasi 
                        baru di sini dan mengirimkan pemberitahuan melalui aplikasi atau email.
                    </p>
                    Hubungi Kami
                    <p>
                        Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan privasi ini atau 
                        praktik privasi kami, silakan hubungi kami di {' '}
                        <a className={styles['a']} href='mailto:stylelagiid@gmail.com'>stylelagiid@gmail.com</a>
                        {/* */}.
                    </p>
                    Penghapusan Akun
                    <p>
                        Jika Anda ingin menghapus akun Anda, hubungi {' '}
                        <a className={styles['a']} href='mailto:stylelagiid@gmail.com'>stylelagiid@gmail.com</a>
                        {' '} untuk melakukan permintaan.</p>
                </div>
            </div>
        </div>
    );
};
