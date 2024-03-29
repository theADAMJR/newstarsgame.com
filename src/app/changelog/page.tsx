"use client"
import { marked } from 'marked';
import './changelog.css';
import Navbar from '@/components/navbar';
import { useEffect } from 'react';

export const metadata = {
  title: 'New Stars - Changelog',
}

export default function Home() {
  useEffect(() => {
    document.body.classList.remove('no-scroll');
    return () => {
      document.body.classList.add('no-scroll');
    };
  }, []);

  const changelog = require('./changelog.md').default
    .replace(/- ([A-Za-z \-,]+) ->/gm, "- **$1** ->")
    .replace(/- ([A-Za-z \-,]+):/gm, "- **$1**:")
    .replace(/    -> ([A-Za-z \-,]+) ->/gm, "    -> **$1** ->")
    .replace(/    ->/gm, "    -");

  return (
    <main className="min-h-screen pb-40 .main">
      <Navbar />

      <header className='py-20 pt-40'>
        <h1 className='text-center'>New Stars - Changelog</h1>
      </header>

      <div className='flex justify-center items-center'>
        <div className='px-10 my-10'
          style={{ maxWidth: '750px' }}
          dangerouslySetInnerHTML={{ __html: marked(changelog, { mangle: false, headerIds: false }) }} />
      </div>

      <div className="left">
        <a href="https://game-icons.net/" target="_blank">&copy; Star satellites icon - by Lorc under CC-BY-3.0</a>


        <footer>
          <ul className="soc">
            <li>
              <a className="github-icon github" href="https://github.com/theadamjr" target="_blank" title="GitHub">
                <div className="ir">
                  <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" width="512" height="512">
                    <path
                      d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z">
                    </path>
                  </svg>
                </div>
              </a>
            </li>
            <li>
              <a className="youtube-icon youtube" href="https://youtube.com/adamjr" target="_blank" title="YouTube">
                <div className="ir">
                  <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" width="512" height="512">
                    <path
                      d="M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z">
                    </path>
                  </svg>
                </div>
              </a>
            </li>
            <li>
              <a className="steam-icon steam" href="https://store.steampowered.com/app/2231270" target="_blank" title="Steam">
                <div className="ir">
                  <svg viewBox="0 0 256 259" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                    <path
                      d="M127.778579,0 C60.4203546,0 5.24030561,52.412282 0,119.013983 L68.7236558,147.68805 C74.5451924,143.665561 81.5845466,141.322185 89.1497766,141.322185 C89.8324924,141.322185 90.5059824,141.340637 91.1702465,141.377541 L121.735621,96.668877 L121.735621,96.0415165 C121.735621,69.1388208 143.425688,47.2457835 170.088511,47.2457835 C196.751333,47.2457835 218.441401,69.1388208 218.441401,96.0415165 C218.441401,122.944212 196.751333,144.846475 170.088511,144.846475 C169.719475,144.846475 169.359666,144.83725 168.99063,144.828024 L125.398299,176.205276 C125.425977,176.786507 125.444428,177.367738 125.444428,177.939743 C125.444428,198.144443 109.160732,214.575753 89.1497766,214.575753 C71.5836817,214.575753 56.8868387,201.917832 53.5655182,185.163615 L4.40997549,164.654462 C19.6326942,218.967277 69.0834655,258.786219 127.778579,258.786219 C198.596511,258.786219 256,200.847629 256,129.393109 C256,57.9293643 198.596511,0 127.778579,0 Z M80.3519677,196.332478 L64.6033732,189.763644 C67.389592,195.63131 72.2239585,200.539484 78.6359521,203.233444 C92.4932392,209.064206 108.472481,202.430791 114.247888,188.435116 C117.043333,181.663313 117.061785,174.190342 114.294018,167.400086 C111.526251,160.609831 106.295171,155.31417 99.5879487,152.491048 C92.9176301,149.695603 85.7767911,149.797088 79.5031858,152.186594 L95.777656,158.976849 C105.999942,163.276114 110.834309,175.122157 106.571948,185.436702 C102.318812,195.751247 90.574254,200.631743 80.3519677,196.332478 Z M202.30901,96.0424391 C202.30901,78.1165345 187.85204,63.5211763 170.092201,63.5211763 C152.323137,63.5211763 137.866167,78.1165345 137.866167,96.0424391 C137.866167,113.968344 152.323137,128.554476 170.092201,128.554476 C187.85204,128.554476 202.30901,113.968344 202.30901,96.0424391 Z M145.938821,95.9870838 C145.938821,82.4988323 156.779242,71.5661525 170.138331,71.5661525 C183.506646,71.5661525 194.347066,82.4988323 194.347066,95.9870838 C194.347066,109.475335 183.506646,120.408015 170.138331,120.408015 C156.779242,120.408015 145.938821,109.475335 145.938821,95.9870838 Z">
                    </path>
                  </svg>
                </div>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </main>
  );
}
