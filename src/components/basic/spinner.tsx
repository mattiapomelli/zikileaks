import cx from "classnames";
import { twMerge } from "tailwind-merge";

export const Spinner = ({ className }: { className?: string }) => {
  return (
    <svg
      className={twMerge(cx("w-4 animate-spin", className))}
      width="152"
      height="152"
      viewBox="0 0 152 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M74.7917 151C108.058 151 135.026 120.663 135.026 83.2398C135.026 45.8168 108.058 15.4795 74.7917 15.4795C41.5255 15.4795 14.5579 45.8168 14.5579 83.2398C14.5579 120.663 41.5255 151 74.7917 151Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M70.7707 103.573C66.825 99.9864 65.6147 107.791 57.7899 106.912C50.7484 106.121 40.8245 112.045 39.0171 117.362C33.9221 132.352 45.5867 144.642 57.7899 148.068C79.5791 154.186 93.8477 144.643 93.2426 143.722C88.8321 137.006 76.5854 108.859 70.7707 103.573Z"
        fill="#EAC8B8"
        stroke="black"
        stroke-width="2"
        stroke-miterlimit="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M69.0413 104.079C72.0344 102.91 95.3872 122.408 117.41 128.392C118.049 128.566 109.567 147.037 92.1868 143.196C84.2423 141.441 72.2433 120.766 69.0413 104.079Z"
        fill="#F1DFD6"
        stroke="black"
        stroke-width="2"
        stroke-miterlimit="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M70.9155 103.982C70.9096 103.98 85.876 125.648 107.649 128.959C113.892 129.909 115.42 133.986 118.36 134.281C129.651 135.413 136.055 115.568 129.257 113.63C120.474 111.127 91.5723 114.628 70.9155 103.982Z"
        fill="#F1DFD6"
        stroke="black"
        stroke-width="2"
        stroke-miterlimit="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        opacity="0.8"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M74.0701 105.936C72.2503 106.591 81.3557 118.711 114.109 116.791C126.82 116.047 133.918 123.185 137.506 122.088C146.207 119.429 149.223 85.3169 138.916 82.5073C128.723 79.7283 129.915 84.0762 114.384 91.5977C97.0838 99.976 79.1906 104.092 74.0701 105.936Z"
        fill="#F1DFD6"
        stroke="black"
        stroke-width="2"
        stroke-miterlimit="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M80.6003 103.058C82.7054 100.942 126.154 46.0871 132.116 45.2738C143.503 43.7205 148.794 56.2792 150.469 65.7824C152.105 75.0604 149.833 88.2645 145.376 89.6702C138.153 91.9476 132.663 83.8726 120.086 91.1127C103.855 100.457 80.6003 103.058 80.6003 103.058Z"
        fill="#F1DFD6"
        stroke="black"
        stroke-width="2"
        stroke-miterlimit="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M73.9889 104.079C73.962 104.109 78.5552 104.33 80.6004 95.0311C82.9672 84.2705 92.6356 28.9976 101.516 23.1636C108.689 18.451 116.518 20.123 120.463 20.2003C133.038 20.4467 147.476 41.266 138.532 54.4936C135.37 59.1695 122.038 59.9465 111.553 71.1211C98.5237 85.0064 81.3754 107.721 73.9889 104.079Z"
        fill="#F1DFD6"
        stroke="black"
        stroke-width="2"
        stroke-miterlimit="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M70.1904 102.916C55.7692 99.5363 39.6124 34.4194 68.3717 8.38729C77.9031 -0.240364 94.4528 -0.241611 104.675 2.98C112.982 5.59793 121.322 15.9488 119.935 20.9348C116.206 34.3378 100.957 44.5061 94.8232 56.3452C86.3664 72.6681 87.5487 87.366 83.0953 97.9093C80.9327 103.029 77.4608 104.62 70.1904 102.916Z"
        fill="#EAC8B8"
        stroke="black"
        stroke-width="2"
        stroke-miterlimit="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M113.975 10.2152C113.353 9.8107 115.018 13.4803 114.638 19.8502C114.159 27.8564 99.1584 37.0041 89.6164 54.7792C84.8602 63.6388 81.0153 82.819 80.381 92.4656C79.9722 98.6825 73.7323 102.29 73.8393 102.321C78.0382 103.539 81.0683 101.111 81.9684 98.8069C85.9635 88.5815 86.7755 76.3199 90.1103 65.0212C95.4652 46.8774 114.035 37.2461 119.019 20.9823C120.131 17.3538 115.019 10.8938 113.975 10.2152Z"
        fill="#413028"
        fill-opacity="0.42"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M149.348 80.9607C144.348 86.6256 137.462 79.8371 127.857 81.8561C123.98 82.671 117.776 87.9903 106.524 92.1387C95.1693 96.3244 81.593 102.499 81.6619 102.5C87.9376 102.577 100.937 104.447 114.35 99.206C118.777 97.4764 122.758 93.7017 127.626 92.7923C133.123 91.7657 141.035 94.1043 143.777 91.0794C144.547 90.2298 145.363 89.462 146.75 87.5007C148.928 84.4183 149.539 80.7444 149.348 80.9607Z"
        fill="#413028"
        fill-opacity="0.48"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M142.067 114.816C134.054 118.328 130.63 114.336 121.922 112.825C114.983 111.621 107.041 112.947 96.0028 112.277C86.6073 111.706 74.7862 106.555 74.7922 106.597C75.2799 110.016 81.8562 114.725 84.7875 115.984C87.1916 117.016 90.924 118.345 95.0991 119.022C104.338 120.523 113.055 121.036 119.727 120.082C123.847 119.492 129.072 121.959 131.059 121.259C133.01 120.572 135.35 121.884 137.065 121.293C139.318 120.518 140.922 118.017 142.067 114.816Z"
        fill="#413028"
        fill-opacity="0.51"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M68.4912 102.781C66.9356 105.977 65.7884 126.32 85.5241 143.331C86.4022 144.088 81.6804 144.783 74.7921 144.91C69.8564 145.001 64.5135 145.964 53.6068 140.28C43.3208 134.919 38.5663 124.763 38.5976 125.359C38.9593 132.254 43.6201 139.855 49.0227 142.989C56.2379 147.175 64.226 149.913 73.5433 149.284C82.2542 148.695 85.6042 146.568 89.8619 146.137C93.7615 145.741 96.0863 143.323 96.2958 143.086C96.3747 142.997 91.7475 141.45 88.3663 136.947C81.4045 127.677 73.047 113.334 70.3621 105.095C69.7029 103.072 68.4912 103.336 68.4912 102.781Z"
        fill="#413028"
        fill-opacity="0.47"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M120.984 133.37C120.083 131.628 113.755 127.474 109.55 126.75C88.6261 123.148 71.1775 106.597 71.615 106.597C72.642 106.597 77.216 116.912 89.3618 124.362C99.2984 130.457 103.151 129.529 109.55 132.345C114.121 134.356 119.819 134.029 120.984 133.37Z"
        fill="#413028"
        fill-opacity="0.4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M139.248 38.0054C139.157 37.0579 141.919 48.1216 129.268 53.9317C117.051 59.5421 110.244 64.1556 101.182 75.7204C91.0298 88.6776 90.5419 93.6069 78.7104 102.647C77.3457 103.69 86.0855 98.4423 89.9865 93.9294C93.8612 89.4468 100.28 82.8412 111.359 70.0312C114.273 66.662 119.872 63.0974 123.742 61.1356C129.717 58.1061 134.653 57.2054 137.563 54.4358C140.297 51.835 141.745 45.805 139.248 38.0054Z"
        fill="#413028"
        fill-opacity="0.51"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M26.191 23.5907C22.3639 13.9944 14.0411 15.9472 10.8352 14.524C6.6256 12.6555 5.27168 9.22739 3.9716 8.79079C1.07511 7.81807 -3.49914 27.1244 11.7378 36.9365C17.6934 40.7716 27.6181 27.1688 26.191 23.5907Z"
        fill="#DEC6BA"
        stroke="black"
        stroke-width="2"
        stroke-miterlimit="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M77.4279 49.9158C76.9869 49.9661 88.778 50.4997 93.8742 39.5985C97.2021 32.4799 93.9659 17.0571 95.2427 10.9293C96.3306 5.70841 98.1353 3.61055 98.0615 3.62113C92.4023 4.43533 83.4359 4.90776 76.6355 10.9404C70.8559 16.0675 73.3054 26.8189 73.1078 27.2579C72.7096 28.1424 70.6597 19.7186 58.4429 19.6554C52.1128 19.6227 43.7925 12.2683 39.5478 6.01297C38.8376 4.96646 37.4486 12.2298 41.0514 18.5276C41.1032 18.6179 40.8614 18.543 40.7664 18.5506C33.4703 19.1436 25.838 21.073 20.8975 27.1798C12.8596 37.1156 8.5985 44.5779 20.6656 93.2274C22.6638 101.283 22.5706 108.449 23.536 112.868C26.0663 124.45 39.5319 127.317 47.7499 121.429C51.192 118.962 54.2645 110.298 56.5088 106.234C61.566 97.0768 77.1532 92.9195 78.7064 63.5277C79.0275 57.4485 77.8217 49.8709 77.4279 49.9158Z"
        fill="#F1DFD6"
        stroke="black"
        stroke-width="2"
        stroke-miterlimit="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M92.0546 10.9585C82.5535 11.8098 78.3237 19.5175 79.1674 26.9765C80.0622 34.8876 80.1375 41.5633 80.1569 41.329C80.2463 40.2437 80.1234 38.0334 83.7613 38.1996C90.2923 38.4977 91.1413 27.4678 89.3813 18.7439C88.2885 13.3262 91.8906 12.3658 92.0546 10.9585Z"
        fill="#63534B"
      />
      <path
        d="M92.0546 10.9585C82.5535 11.8098 78.3237 19.5175 79.1674 26.9765C80.0622 34.8876 80.1375 41.5633 80.1569 41.329C80.2463 40.2437 80.1234 38.0334 83.7613 38.1996C93.0863 38.6253 89.9985 23.6704 89.6044 18.6483"
        stroke="black"
        stroke-width="2"
        stroke-miterlimit="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5762 35.2324C11.9403 44.2633 13.7976 63.7721 17.6211 79.5182C19.8325 88.6246 22.237 98.4211 22.5501 98.5293C23.9859 99.0254 43.0977 106.379 48.2752 100.301C52.9889 94.7671 50.7413 74.8663 52.0234 68.381C53.0113 63.3836 55.7324 58.9837 61.1405 58.8802C67.3541 58.7612 73.1703 54.5776 74.7903 47.4037C75.5217 44.1645 77 35.4518 73.2388 28.8881C69.7315 22.7673 64.3741 20.7336 57.7475 20.5491C51.1752 20.3661 39.6445 7.73193 39.6445 7.73193C39.6445 7.73193 38.7346 12.8663 42.0073 18.6532C42.2272 19.0418 33.6425 19.2189 26.4407 23.2939C22.2253 25.6794 18.9296 30.6479 16.5762 35.2324Z"
        fill="#EAC8B8"
        stroke="black"
        stroke-width="2"
        stroke-miterlimit="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.5198 98.4559C26.6932 99.3411 29.7797 101.096 33.9746 101.235C44.071 101.568 48.8803 98.3964 49.2705 98.7785C49.4368 98.9414 48.2765 119.802 44.317 122.563C42.639 123.733 39.8364 123.47 37.3778 123.493C33.4295 123.529 29.1193 122.204 25.7821 116.613C23.2817 112.424 22.2307 98.3947 22.5198 98.4559Z"
        fill="#262625"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M62.9307 69.6555C65.4846 69.9388 67.296 73.19 66.9734 76.9115C66.6507 80.633 64.3153 83.4244 61.7614 83.1413C59.2075 82.8581 57.3959 79.6069 57.7186 75.8853C58.0412 72.1638 60.3766 69.3723 62.9307 69.6555Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.4749 86.7016C22.8424 86.1135 25.1662 86.3041 25.4317 87.0666C25.6225 87.6144 25.9458 92.4401 25.4631 93.0745C25.1354 93.5053 23.5039 93.2305 23.1555 92.4773C22.5979 91.2715 22.0002 87.4613 22.4749 86.7016Z"
        fill="#413028"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.4884 87.4167C27.8003 88.3701 27.7893 91.9554 28.6756 93.1351C29.5881 94.3493 36.2135 93.8582 36.7578 93.0035C37.2237 92.2723 37.1004 87.7323 36.0021 87.4802C35.0631 87.2647 29.1764 86.4631 28.4884 87.4167Z"
        fill="#413028"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M39.8352 87.5123C39.1982 88.1178 39.7355 91.4653 40.0145 92.4117C40.2283 93.1373 46.4397 92.8244 46.812 90.7193C46.9727 89.811 47.2577 87.7149 46.6431 87.0198C46.3803 86.7227 40.8768 86.522 39.8352 87.5123Z"
        fill="#413028"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.9901 77.2532C27.671 78.903 27.8109 82.9733 28.261 83.9912C28.5407 84.6237 34.7393 85.7611 35.8242 84.5343C36.443 83.8346 37.1322 77.4697 35.8799 77.1156C35.2441 76.9359 28.2504 75.9063 27.9901 77.2532Z"
        fill="#413028"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M38.8088 76.8145C38.0557 77.1677 37.9823 83.4991 39.2459 84.4664C40.6376 85.5314 46.3446 84.3807 46.449 84.2627C46.6747 84.0075 47.9257 76.5856 46.2689 76.1173C44.7365 75.6839 40.0393 76.2376 38.8088 76.8145Z"
        fill="#413028"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.7694 77.1113C21.055 77.8423 21.5457 79.42 21.9373 80.8249C22.4831 82.7834 22.7692 85.639 25.3304 84.9148C25.9069 84.7519 25.9953 78.5782 25.0795 77.5426C24.5112 76.8998 22.2019 76.6688 21.7694 77.1113Z"
        fill="#413028"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.9273 67.0448C19.2671 67.5426 20.3538 74.1916 21.2383 74.6918C21.9288 75.0821 24.6506 75.1964 24.9598 74.9633C25.3399 74.6768 25.1837 68.2713 24.1195 67.4287C23.2231 66.719 20.5876 66.547 19.9273 67.0448Z"
        fill="#413028"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.4853 67.9055C26.9741 68.2602 26.9794 73.2684 27.6612 74.013C28.4986 74.9273 34.8134 75.3602 36.0047 74.013C36.4379 73.523 36.682 68.5054 36.1453 67.8985C35.6495 67.3378 29.0163 66.8431 27.4853 67.9055Z"
        fill="#413028"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M38.7457 67.5913C37.5653 68.5869 38.7653 74.4654 39.1855 74.6239C40.7968 75.2311 46.2941 75.0941 47.0197 73.701C47.2884 73.1854 48.1398 68.5315 47.6852 67.6964C47.2739 66.9409 39.9263 66.5957 38.7457 67.5913Z"
        fill="#413028"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.1941 51.3326C17.2537 54.1477 18.2076 61.8884 19.6173 63.2202C21.1457 64.6644 23.0566 64.3295 23.5857 64.0901C24.366 63.7371 23.467 51.7322 23.0387 51.4092C21.919 50.5651 17.1566 49.5568 17.1941 51.3326Z"
        fill="#413028"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.1231 51.7288C25.8544 53.6701 26.2167 63.0643 27.601 64.2384C28.6471 65.1256 34.5664 65.3363 35.5843 64.6456C37.0066 63.6806 38.5192 52.1758 38.2402 51.6641C37.3683 50.0648 28.4846 49.6451 27.1231 51.7288Z"
        fill="#413028"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M42.0016 50.3491C39.8271 51.1964 37.4849 62.8732 39.4384 64.3034C41.0072 65.4522 48.1617 65.1216 48.929 64.3034C51.5949 61.4611 51.4408 56.9354 53.0406 55.0382C55.1835 52.4969 56.7903 50.18 56.3655 49.3146C55.5487 47.6507 44.7885 49.263 42.0016 50.3491Z"
        fill="#413028"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M59.9199 49.0449C58.3465 50.8052 58.1287 56.4211 58.6223 56.625C60.7941 57.5222 64.6641 55.2255 68.4107 52.4442C70.2757 51.0598 70.9352 47.7655 70.439 46.5008C70.068 45.5555 61.4934 47.2846 59.9199 49.0449Z"
        fill="#413028"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M64.4928 31.6111C62.3169 32.5759 59.5741 42.5363 61.0247 42.8838C64.0451 43.6074 63.9634 42.5661 67.8426 38.5789C69.6411 36.7303 71.7759 37.0748 71.9486 34.8022C72.1869 31.6658 66.42 30.7566 64.4928 31.6111Z"
        fill="#413028"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M50.3038 33.7392C47.6499 35.2658 42.4112 44.5534 43.3566 46.2331C44.3528 48.0032 55.458 46.0891 56.434 45.2061C58.3961 43.431 61.0261 33.1236 60.8406 32.2843C60.706 31.6752 53.2202 32.0615 50.3038 33.7392Z"
        fill="#413028"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30.088 34.4321C28.9978 35.4137 25.2735 45.1231 25.9836 46.8326C26.3299 47.6664 39.0922 47.056 40.594 45.5829C41.8992 44.3027 46.9075 33.5083 46.7509 32.9773C46.3603 31.6521 32.1905 32.539 30.088 34.4321Z"
        fill="#413028"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.7668 36.1163C24.3642 34.9562 20.9513 34.6477 19.7246 36.7126C18.3095 39.0944 17.07 45.6591 17.836 47.7333C18.3092 49.0149 21.6039 47.8927 22.4363 47.5397C25.3801 46.2914 26.561 36.7733 25.7668 36.1163Z"
        fill="#413028"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33.8451 25.3478C31.9376 26.326 30.3875 30.5873 31.5858 31.307C32.681 31.9648 35.6587 30.9639 39.8619 30.4316C44.7389 29.8139 47.6831 30.2841 49.0948 29.779C50.3273 29.3379 53.8576 24.6638 53.1858 23.7492C52.0701 22.2307 37.9554 23.2397 33.8451 25.3478Z"
        fill="#413028"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M56.4341 24.5895C54.9128 24.8434 52.8066 28.9576 53.2445 29.5827C53.6036 30.0955 57.9416 29.4739 59.751 29.1836C60.8339 29.01 62.2524 28.7366 62.3723 28.0587C62.7632 25.8484 57.9553 24.3353 56.4341 24.5895Z"
        fill="#413028"
      />
    </svg>
  );
};
