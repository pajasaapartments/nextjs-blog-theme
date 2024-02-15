import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="w-12 h-12 rounded-ful block mx-auto mb-4 bg-gradient-conic from-gradient- to-gradient-4">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="36.000000pt" height="36.000000pt" viewBox="0 0 784.000000 546.000000" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="MyGradient">
              <stop offset="5%" stop-color="#F60" />
              <stop offset="95%" stop-color="#FF6" />
            </linearGradient>
          </defs>
          <g transform="translate(0.000000,546.000000) scale(0.100000,-0.100000)" fill="#aaaaaa" stroke="#00fff0">
            <path d="M5334 5238 c-6 -7 -121 -263 -257 -568 -135 -305 -433 -978 -662
-1495 -229 -517 -449 -1013 -488 -1102 -40 -90 -75 -163 -78 -163 -3 0 -35 66
-72 148 -176 395 -393 885 -422 952 -31 71 -282 638 -422 950 -35 80 -82 186
-104 235 -165 379 -396 888 -403 889 -5 0 -101 -206 -213 -459 -113 -253 -281
-633 -375 -845 -94 -212 -197 -443 -228 -515 -32 -71 -130 -292 -218 -490 -88
-198 -212 -479 -277 -625 -64 -146 -188 -425 -275 -620 -87 -195 -237 -535
-335 -755 -97 -220 -196 -443 -220 -495 -23 -52 -40 -98 -36 -103 4 -4 648 -6
1431 -5 l1424 3 76 170 c42 94 209 468 370 833 161 364 296 662 299 662 3 0
62 -128 130 -283 69 -155 182 -410 251 -567 70 -157 178 -400 240 -540 62
-140 117 -261 123 -267 7 -10 320 -13 1503 -13 866 0 1495 4 1498 9 3 5 -5 33
-18 62 -14 30 -149 335 -301 679 -152 344 -294 663 -315 710 -60 133 -519
1166 -555 1250 -18 41 -43 98 -55 125 -13 28 -146 329 -297 670 -596 1344
-685 1544 -697 1560 -10 14 -14 14 -22 3z"></path>
          </g>
        </svg>
      </div>
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
