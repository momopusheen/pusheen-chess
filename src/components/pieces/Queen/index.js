import React, { Component } from 'react';

class Queen extends Component {
  render() {
    return (
      <svg className="queen" viewBox="0 0 286 363" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g className="queen__body">
          <g transform="translate(11.0002 46)">
            <mask id="queen__mask-1" fill="white">
              <path fillRule="evenodd" clipRule="evenodd" d="M 78.0408 3.67842L 102.179 27.1102C 111.437 25.0795 121.371 24.0732 132 24.0249L 132 24.0231C 132.135 24.0231 132.269 24.0232 132.403 24.0235C 132.538 24.0232 132.672 24.0231 132.807 24.0231L 132.807 24.0249C 143.184 24.0721 152.898 25.0323 161.968 26.9674L 185.959 3.67842C 192.894 -3.05382 204.49 -0.132288 207.408 9.08236L 228.272 74.9822C 253.179 115.818 264.694 183.084 264.694 283.448C 266.203 300.968 252.389 316.023 234.805 316.023L 30.0022 316.023C 12.4177 316.023 -1.39629 300.968 0.1129 283.448C 0.1129 185.438 11.094 118.992 34.8041 77.8992L 56.5924 9.08236C 59.5098 -0.132288 71.1055 -3.05382 78.0408 3.67842Z"/>
            </mask>
            <path fillRule="evenodd" clipRule="evenodd" d="M 78.0408 3.67842L 102.179 27.1102C 111.437 25.0795 121.371 24.0732 132 24.0249L 132 24.0231C 132.135 24.0231 132.269 24.0232 132.403 24.0235C 132.538 24.0232 132.672 24.0231 132.807 24.0231L 132.807 24.0249C 143.184 24.0721 152.898 25.0323 161.968 26.9674L 185.959 3.67842C 192.894 -3.05382 204.49 -0.132288 207.408 9.08236L 228.272 74.9822C 253.179 115.818 264.694 183.084 264.694 283.448C 266.203 300.968 252.389 316.023 234.805 316.023L 30.0022 316.023C 12.4177 316.023 -1.39629 300.968 0.1129 283.448C 0.1129 185.438 11.094 118.992 34.8041 77.8992L 56.5924 9.08236C 59.5098 -0.132288 71.1055 -3.05382 78.0408 3.67842Z" fill="#C0B7AE"/>
            <g mask="url(#queen__mask-1)">
              <path d="M 102.179 27.1102L 96.6072 32.8504L 99.6929 35.8458L 103.893 34.9244L 102.179 27.1102ZM 78.0408 3.67842L 83.613 -2.06185L 83.613 -2.06186L 78.0408 3.67842ZM 132 24.0249L 132.036 32.0248L 140 31.9886L 140 24.0249L 132 24.0249ZM 132 24.0231L 132 16.0231L 124 16.0231L 124 24.0231L 132 24.0231ZM 132.403 24.0235L 132.385 32.0235L 132.403 32.0235L 132.422 32.0235L 132.403 24.0235ZM 132.807 24.0231L 140.807 24.0231L 140.807 16.0231L 132.807 16.0231L 132.807 24.0231ZM 132.807 24.0249L 124.807 24.0249L 124.807 31.9886L 132.77 32.0248L 132.807 24.0249ZM 161.968 26.9674L 160.298 34.7913L 164.475 35.6826L 167.54 32.7077L 161.968 26.9674ZM 185.959 3.67842L 191.531 9.41868L 191.531 9.41868L 185.959 3.67842ZM 207.408 9.08236L 199.781 11.4971L 207.408 9.08236ZM 228.272 74.9822L 220.646 77.397L 220.938 78.3207L 221.443 79.1479L 228.272 74.9822ZM 264.694 283.448L 256.694 283.448L 256.694 283.792L 256.723 284.135L 264.694 283.448ZM 0.1129 283.448L 8.08338 284.135L 8.1129 283.792L 8.1129 283.448L 0.1129 283.448ZM 34.8041 77.8992L 41.7333 81.8973L 42.1682 81.1436L 42.4309 80.314L 34.8041 77.8992ZM 56.5924 9.08236L 48.9655 6.6676L 48.9655 6.6676L 56.5924 9.08236ZM 107.752 21.3699L 83.613 -2.06185L 72.4686 9.41868L 96.6072 32.8504L 107.752 21.3699ZM 131.964 16.025C 120.856 16.0755 110.351 17.1274 100.465 19.296L 103.893 34.9244C 112.522 33.0316 121.886 32.071 132.036 32.0248L 131.964 16.025ZM 124 24.0231L 124 24.0249L 140 24.0249L 140 24.0231L 124 24.0231ZM 132.422 16.0235C 132.281 16.0232 132.141 16.0231 132 16.0231L 132 32.0231C 132.129 32.0231 132.257 32.0232 132.385 32.0235L 132.422 16.0235ZM 132.807 16.0231C 132.666 16.0231 132.526 16.0232 132.385 16.0235L 132.422 32.0235C 132.55 32.0232 132.678 32.0231 132.807 32.0231L 132.807 16.0231ZM 140.807 24.0249L 140.807 24.0231L 124.807 24.0231L 124.807 24.0249L 140.807 24.0249ZM 163.637 19.1435C 153.957 17.0781 143.688 16.0743 132.843 16.025L 132.77 32.0248C 142.68 32.0699 151.84 32.9866 160.298 34.7913L 163.637 19.1435ZM 180.387 -2.06185L 156.395 21.2272L 167.54 32.7077L 191.531 9.41868L 180.387 -2.06185ZM 215.035 6.6676C 210.322 -8.21761 191.59 -12.937 180.387 -2.06185L 191.531 9.41868C 194.199 6.82936 198.659 7.95303 199.781 11.4971L 215.035 6.6676ZM 235.899 72.5675L 215.035 6.6676L 199.781 11.4971L 220.646 77.397L 235.899 72.5675ZM 272.694 283.448C 272.694 182.944 261.254 113.694 235.102 70.8166L 221.443 79.1479C 245.104 117.943 256.694 183.225 256.694 283.448L 272.694 283.448ZM 234.805 324.023C 257.078 324.023 274.576 304.953 272.664 282.762L 256.723 284.135C 257.83 296.983 247.7 308.023 234.805 308.023L 234.805 324.023ZM 30.0022 324.023L 234.805 324.023L 234.805 308.023L 30.0022 308.023L 30.0022 324.023ZM -7.85758 282.762C -9.76922 304.953 7.72855 324.023 30.0022 324.023L 30.0022 308.023C 17.1069 308.023 6.97664 296.983 8.08338 284.135L -7.85758 282.762ZM 27.8748 73.9011C 3.03165 116.958 -7.8871 185.273 -7.8871 283.448L 8.1129 283.448C 8.1129 185.604 19.1564 121.026 41.7333 81.8973L 27.8748 73.9011ZM 48.9655 6.6676L 27.1772 75.4845L 42.4309 80.314L 64.2192 11.4971L 48.9655 6.6676ZM 83.613 -2.06186C 72.4098 -12.937 53.6784 -8.21761 48.9655 6.6676L 64.2192 11.4971C 65.3413 7.95303 69.8012 6.82936 72.4686 9.41869L 83.613 -2.06186Z" fill="#4C2C13"/>
            </g>
          </g>
          <path className="queen__eyes" fillRule="evenodd" clipRule="evenodd" d="M 11 22C 17.0751 22 22 17.0751 22 11C 22 4.92487 17.0751 0 11 0C 4.92487 0 0 4.92487 0 11C 0 17.0751 4.92487 22 11 22ZM 93 22C 99.0751 22 104 17.0751 104 11C 104 4.92487 99.0751 0 93 0C 86.9249 0 82 4.92487 82 11C 82 17.0751 86.9249 22 93 22Z" transform="translate(91.0002 113.023)" fill="#4C2C13"/>
          <path className="queen__mouth" fillRule="evenodd" clipRule="evenodd" d="M 15.5011 0.000809779C 15.3248 -0.00273789 15.1462 0.00533783 14.9661 0.0256969C 12.771 0.273934 11.1927 2.25469 11.4409 4.44983C 11.4795 4.7905 11.4996 5.13462 11.5022 5.4754C 11.502 5.52378 11.502 5.57224 11.5022 5.62109C 11.4921 7.07481 11.164 8.44969 10.59 9.21393C 10.3267 9.5644 10.0052 9.81001 9.42759 9.92827C 8.7573 10.0655 7.47873 10.0751 5.32555 9.31956C 3.24103 8.58807 0.958211 9.68493 0.226736 11.7694C -0.504755 13.854 0.592092 16.1368 2.67663 16.8683C 5.70626 17.9314 8.51018 18.2821 11.0322 17.7657C 12.8155 17.4006 14.3038 16.6321 15.5011 15.6064C 16.6984 16.6321 18.1867 17.4006 19.9699 17.7657C 22.492 18.2821 25.2959 17.9314 28.3256 16.8683C 30.4101 16.1368 31.5069 13.854 30.7754 11.7694C 30.044 9.68493 27.7611 8.58807 25.6766 9.31956C 23.5234 10.0751 22.2449 10.0655 21.5746 9.92827C 20.997 9.81001 20.6754 9.5644 20.4122 9.21393C 19.8382 8.44969 19.51 7.07489 19.4999 5.62117C 19.5002 5.57232 19.5002 5.52371 19.5 5.47533C 19.5026 5.13455 19.5227 4.7905 19.5612 4.44983C 19.8095 2.25469 18.2312 0.273934 16.036 0.0256969C 15.856 0.00533783 15.6774 -0.00273789 15.5011 0.000809779Z" transform="translate(126.999 126.023)" fill="#4C2C13"/>
          <path className="queen__whiskers" fillRule="evenodd" clipRule="evenodd" d="M 53.0646 11.7705C 57.0622 12.7162 59.6872 13.6733 60.9348 14.4255C 62.8266 15.5662 65.285 14.9573 66.4257 13.0654C 67.5664 11.1736 66.9575 8.71521 65.0656 7.5745C 62.6861 6.13974 59.0243 4.95955 54.9063 3.9854C 50.6678 2.98274 45.5424 2.10864 39.9629 1.43698C 28.8157 0.0950841 15.6111 -0.46779 3.69278 0.450915C 1.49017 0.620698 -0.157755 2.5439 0.0120255 4.7465C 0.18181 6.94911 2.10501 8.59704 4.30761 8.42725C 15.6024 7.55662 28.2707 8.08723 39.0068 9.37964C 44.3688 10.0251 49.1876 10.8534 53.0646 11.7705ZM 225.066 17.4255C 226.313 16.6733 228.938 15.7162 232.936 14.7705C 236.813 13.8534 241.632 13.0251 246.994 12.3796C 257.73 11.0872 270.398 10.5566 281.693 11.4273C 283.895 11.597 285.819 9.94911 285.988 7.7465C 286.158 5.5439 284.51 3.6207 282.308 3.45092C 270.389 2.53221 257.185 3.09508 246.037 4.43698C 240.458 5.10864 235.333 5.98274 231.094 6.9854C 226.976 7.95955 223.314 9.13974 220.935 10.5745C 219.043 11.7152 218.434 14.1736 219.575 16.0654C 220.715 17.9573 223.174 18.5662 225.066 17.4255ZM 228.066 34.4255C 230.887 32.7246 236.944 31.0857 245.684 30.1668C 254.23 29.2683 264.797 29.1097 276.193 29.9882C 278.395 30.1579 280.319 28.51 280.488 26.3074C 280.658 24.1048 279.01 22.1816 276.808 22.0118C 264.991 21.1009 253.934 21.2553 244.847 22.2107C 235.954 23.1457 228.368 24.9015 223.935 27.5745C 222.043 28.7152 221.434 31.1736 222.575 33.0654C 223.715 34.9573 226.174 35.5662 228.066 34.4255ZM 57.9348 31.4255C 55.1138 29.7246 49.0565 28.0857 40.3166 27.1668C 31.7705 26.2683 21.2039 26.1097 9.80762 26.9882C 7.60501 27.1579 5.68181 25.51 5.51203 23.3074C 5.34224 21.1048 6.99017 19.1816 9.19278 19.0118C 21.0097 18.1009 32.066 18.2553 41.1531 19.2107C 50.0463 20.1457 57.6325 21.9015 62.0656 24.5745C 63.9575 25.7152 64.5664 28.1736 63.4257 30.0654C 62.285 31.9573 59.8266 32.5662 57.9348 31.4255Z" transform="translate(0 113.023)" fill="#4C2C13"/>
          <path className="queen__arms" fillRule="evenodd" clipRule="evenodd" d="M 3.99924 0.0771408C -4.56669e-05 0.152458 -2.27787e-05 0.153625 1.0951e-07 0.1549L 6.11447e-05 0.157974L 0.000221362 0.16597L 0.000740161 0.189354L 0.00267803 0.265114C 0.00442516 0.3283 0.00715648 0.416626 0.0112992 0.528412C 0.0195771 0.751907 0.0335084 1.06966 0.0565644 1.46828C 0.102631 2.26463 0.185379 3.38876 0.333016 4.73269C 0.626297 7.40235 1.18465 11.0245 2.25694 14.698C 3.31519 18.3233 4.9575 22.2943 7.58337 25.4276C 10.3015 28.6711 14.1513 31.0771 19.2535 31.0771C 24.3636 31.0771 28.1942 28.6628 30.8727 25.3932C 33.453 22.2434 35.0242 18.2581 36.0147 14.6308C 37.019 10.9533 37.5093 7.32854 37.7524 4.65849C 37.8747 3.31413 37.9363 2.18971 37.9674 1.39322C 37.983 0.994522 37.9909 0.676712 37.995 0.453171C 37.997 0.341362 37.9981 0.253029 37.9986 0.189827L 37.9991 0.114044L 37.9992 0.0906601L 37.9992 0.0826569L 37.9992 0.0795898C 37.9992 0.0783157 37.9992 0.0771408 33.9992 0.0771408C 29.9992 0.0771408 29.9992 0.0761719 29.9992 0.0753098L 29.9992 0.0793762L 29.9989 0.119362C 29.9986 0.158333 29.9979 0.221611 29.9963 0.307556C 29.9932 0.479523 29.9867 0.741791 29.9735 1.08138C 29.947 1.76144 29.8933 2.7464 29.7853 3.9333C 29.5675 6.32574 29.1363 9.45099 28.2973 12.5234C 27.4446 15.6461 26.251 18.4109 24.6841 20.3235C 23.2153 22.1165 21.5163 23.0771 19.2535 23.0771C 16.9827 23.0771 15.2393 22.1082 13.7149 20.2891C 12.0982 18.36 10.8486 15.581 9.93646 12.4563C 9.03841 9.37976 8.54804 6.25193 8.28518 3.85909C 8.15474 2.67178 8.08257 1.68652 8.04322 1.00632C 8.02357 0.666649 8.01218 0.404327 8.00581 0.232315C 8.00263 0.146347 8.0007 0.0830612 7.99963 0.044075L 7.9986 0.00406647L 7.9985 0C 7.99852 0.000862122 7.99854 0.00182343 3.99924 0.0771408ZM 163.999 0.0771408C 160 0.152458 160 0.153625 160 0.1549L 160 0.157974L 160 0.16597L 160.001 0.189354L 160.003 0.265114C 160.004 0.3283 160.007 0.416626 160.011 0.528412C 160.02 0.751907 160.034 1.06966 160.057 1.46828C 160.103 2.26463 160.185 3.38876 160.333 4.73269C 160.626 7.40235 161.185 11.0245 162.257 14.698C 163.315 18.3233 164.958 22.2943 167.583 25.4276C 170.302 28.6711 174.151 31.0771 179.253 31.0771C 184.364 31.0771 188.194 28.6628 190.873 25.3932C 193.453 22.2434 195.024 18.2581 196.015 14.6308C 197.019 10.9533 197.509 7.32854 197.752 4.65849C 197.875 3.31413 197.936 2.18971 197.967 1.39322C 197.983 0.994522 197.991 0.676712 197.995 0.453171C 197.997 0.341362 197.998 0.253029 197.999 0.189827L 197.999 0.114044L 197.999 0.0906601L 197.999 0.0826569L 197.999 0.0795898C 197.999 0.0783157 197.999 0.0771408 193.999 0.0771408C 189.999 0.0771408 189.999 0.0761719 189.999 0.0753098L 189.999 0.0793762L 189.999 0.119362C 189.999 0.158333 189.998 0.221611 189.996 0.307556C 189.993 0.479523 189.987 0.741791 189.973 1.08138C 189.947 1.76144 189.893 2.7464 189.785 3.9333C 189.568 6.32574 189.136 9.45099 188.297 12.5234C 187.445 15.6461 186.251 18.4109 184.684 20.3235C 183.215 22.1165 181.516 23.0771 179.253 23.0771C 176.983 23.0771 175.239 22.1082 173.715 20.2891C 172.098 18.36 170.849 15.581 169.936 12.4563C 169.038 9.37976 168.548 6.25193 168.285 3.85909C 168.155 2.67178 168.083 1.68652 168.043 1.00632C 168.024 0.666649 168.012 0.404327 168.006 0.232315C 168.003 0.146347 168.001 0.0830612 168 0.044075L 167.999 0.00406647L 167.999 0C 167.999 0.000862122 167.999 0.00182343 163.999 0.0771408Z" transform="translate(44.0009 203.946)" fill="#4C2C13"/>
          <path className="queen__stripes" fillRule="evenodd" clipRule="evenodd" d="M 0.0191956 3.9733C 0.00646973 4.15781 0 4.34405 0 4.5318L 0 10.5318C 0 14.9501 3.58173 18.5318 8 18.5318C 12.4183 18.5318 16 14.9501 16 10.5318L 16 4.5318C 16 3.31073 15.7264 2.15356 15.2372 1.11823C 10.2315 1.77798 5.18036 2.72967 0.0191956 3.9733ZM 25.2836 0.183849C 24.4716 1.43559 24 2.92863 24 4.5318L 24 10.5318C 24 14.9501 27.5817 18.5318 32 18.5318C 36.4183 18.5318 40 14.9501 40 10.5318L 40 4.5318C 40 2.92207 39.5246 1.42338 38.7065 0.168492C 34.2028 -0.0611712 29.744 -0.0560524 25.2836 0.183849ZM 48.7891 1.06302C 48.2834 2.11236 48 3.28898 48 4.5318L 48 10.5318C 48 14.9501 51.5817 18.5318 56 18.5318C 60.4183 18.5318 64 14.9501 64 10.5318L 64 4.5318C 64 4.26515 63.987 4.00154 63.9615 3.74158C 58.7734 2.57675 53.7353 1.6839 48.7891 1.06302Z" transform="translate(111 77.849)" fill="#98938E"/>
        </g>
        <g className="queen__crown">
          <g transform="translate(78 85) scale(1 -1)">
            <mask id="queen__mask-2" fill="white">
              <path fillRule="evenodd" clipRule="evenodd" d="M 0 20C 0 8.95432 8.95432 0 20 0L 33 0C 37.7297 0 42.076 1.64178 45.5 4.38657C 48.924 1.64178 53.2703 0 58 0L 71 0C 75.7297 0 80.076 1.64178 83.5 4.38657C 86.924 1.64178 91.2703 0 96 0L 109 0C 120.046 0 129 8.95432 129 20C 129 31.0457 120.046 40 109 40L 96 40C 91.2703 40 86.924 38.3582 83.5 35.6134C 80.076 38.3582 75.7297 40 71 40L 58 40C 53.2703 40 48.924 38.3582 45.5 35.6134C 42.076 38.3582 37.7297 40 33 40L 20 40C 8.95432 40 0 31.0457 0 20Z"/>
            </mask>
            <path fillRule="evenodd" clipRule="evenodd" d="M 0 20C 0 8.95432 8.95432 0 20 0L 33 0C 37.7297 0 42.076 1.64178 45.5 4.38657C 48.924 1.64178 53.2703 0 58 0L 71 0C 75.7297 0 80.076 1.64178 83.5 4.38657C 86.924 1.64178 91.2703 0 96 0L 109 0C 120.046 0 129 8.95432 129 20C 129 31.0457 120.046 40 109 40L 96 40C 91.2703 40 86.924 38.3582 83.5 35.6134C 80.076 38.3582 75.7297 40 71 40L 58 40C 53.2703 40 48.924 38.3582 45.5 35.6134C 42.076 38.3582 37.7297 40 33 40L 20 40C 8.95432 40 0 31.0457 0 20Z" fill="white"/>
            <g mask="url(#queen__mask-2)">
              <path d="M 45.5 4.38657L 40.4962 10.6286L 45.5 14.6397L 50.5038 10.6286L 45.5 4.38657ZM 83.5 4.38657L 78.4962 10.6286L 83.5 14.6397L 88.5038 10.6286L 83.5 4.38657ZM 83.5 35.6134L 88.5038 29.3714L 83.5 25.3603L 78.4962 29.3714L 83.5 35.6134ZM 45.5 35.6134L 50.5038 29.3714L 45.5 25.3603L 40.4962 29.3714L 45.5 35.6134ZM 20 -8C 4.53604 -8 -8 4.53604 -8 20L 8 20C 8 13.3726 13.3726 8 20 8L 20 -8ZM 33 -8L 20 -8L 20 8L 33 8L 33 -8ZM 50.5038 -1.85543C 45.7117 -5.69691 39.6138 -8 33 -8L 33 8C 35.8456 8 38.4403 8.98048 40.4962 10.6286L 50.5038 -1.85543ZM 58 -8C 51.3862 -8 45.2883 -5.69691 40.4962 -1.85543L 50.5038 10.6286C 52.5597 8.98048 55.1544 8 58 8L 58 -8ZM 71 -8L 58 -8L 58 8L 71 8L 71 -8ZM 88.5038 -1.85543C 83.7116 -5.69691 77.6138 -8 71 -8L 71 8C 73.8456 8 76.4403 8.98048 78.4962 10.6286L 88.5038 -1.85543ZM 88.5038 10.6286C 90.5597 8.98048 93.1544 8 96 8L 96 -8C 89.3862 -8 83.2884 -5.69691 78.4962 -1.85543L 88.5038 10.6286ZM 96 8L 109 8L 109 -8L 96 -8L 96 8ZM 109 8C 115.627 8 121 13.3726 121 20L 137 20C 137 4.53605 124.464 -8 109 -8L 109 8ZM 121 20C 121 26.6274 115.627 32 109 32L 109 48C 124.464 48 137 35.464 137 20L 121 20ZM 109 32L 96 32L 96 48L 109 48L 109 32ZM 96 32C 93.1544 32 90.5597 31.0195 88.5038 29.3714L 78.4962 41.8554C 83.2884 45.6969 89.3862 48 96 48L 96 32ZM 71 48C 77.6138 48 83.7116 45.6969 88.5038 41.8554L 78.4962 29.3714C 76.4403 31.0195 73.8456 32 71 32L 71 48ZM 58 48L 71 48L 71 32L 58 32L 58 48ZM 40.4962 41.8554C 45.2883 45.6969 51.3862 48 58 48L 58 32C 55.1544 32 52.5597 31.0195 50.5038 29.3714L 40.4962 41.8554ZM 33 48C 39.6138 48 45.7117 45.6969 50.5038 41.8554L 40.4962 29.3714C 38.4403 31.0195 35.8456 32 33 32L 33 48ZM 20 48L 33 48L 33 32L 20 32L 20 48ZM -8 20C -8 35.464 4.53604 48 20 48L 20 32C 13.3726 32 8 26.6274 8 20L -8 20Z" fill="#4C2C13"/>
            </g>
          </g>
          <g transform="translate(87 4)">
            <mask id="queen__mask-3" fill="white">
              <path d="M 10 56.566C 4.47714 56.566 0 52.0889 0 46.566L 0 8.56604C 0 4.93216 1.93826 1.75101 4.83734 0L 30 28.066L 56 0.06604L 82 28.066L 107.163 0C 110.062 1.75101 112 4.93216 112 8.56604L 112 46.566C 112 52.0889 107.523 56.566 102 56.566L 10 56.566Z"/>
            </mask>
            <path d="M 10 56.566C 4.47714 56.566 0 52.0889 0 46.566L 0 8.56604C 0 4.93216 1.93826 1.75101 4.83734 0L 30 28.066L 56 0.06604L 82 28.066L 107.163 0C 110.062 1.75101 112 4.93216 112 8.56604L 112 46.566C 112 52.0889 107.523 56.566 102 56.566L 10 56.566Z" fill="#CB9B20"/>
            <g mask="url(#queen__mask-3)">
              <path d="M 4.83734 0L 10.7939 -5.34036L 6.37176 -10.2727L 0.701315 -6.84787L 4.83734 0ZM 30 28.066L 24.0434 33.4064L 29.8963 39.9346L 35.8623 33.5096L 30 28.066ZM 56 0.06604L 61.8623 -5.37757L 56 -11.6909L 50.1377 -5.37757L 56 0.06604ZM 82 28.066L 76.1376 33.5096L 82.1037 39.9346L 87.9566 33.4064L 82 28.066ZM 107.163 0L 111.299 -6.84787L 105.628 -10.2727L 101.206 -5.34036L 107.163 0ZM 10 48.566C 8.89542 48.566 8 47.6706 8 46.566L -8 46.566C -8 56.5072 0.0588643 64.566 10 64.566L 10 48.566ZM 8 46.566L 8 8.56604L -8 8.56604L -8 46.566L 8 46.566ZM 8 8.56604C 8 7.84868 8.37265 7.21069 8.97337 6.84787L 0.701315 -6.84787C -4.49613 -3.70868 -8 2.01564 -8 8.56604L 8 8.56604ZM -1.11921 5.34036L 24.0434 33.4064L 35.9566 22.7257L 10.7939 -5.34036L -1.11921 5.34036ZM 35.8623 33.5096L 61.8623 5.50965L 50.1377 -5.37757L 24.1377 22.6224L 35.8623 33.5096ZM 87.8624 22.6224L 61.8623 -5.37757L 50.1377 5.50965L 76.1376 33.5096L 87.8624 22.6224ZM 101.206 -5.34036L 76.0434 22.7257L 87.9566 33.4064L 113.119 5.34036L 101.206 -5.34036ZM 120 8.56604C 120 2.01564 116.496 -3.70868 111.299 -6.84787L 103.027 6.84787C 103.627 7.21069 104 7.84868 104 8.56604L 120 8.56604ZM 120 46.566L 120 8.56604L 104 8.56604L 104 46.566L 120 46.566ZM 102 64.566C 111.941 64.566 120 56.5072 120 46.566L 104 46.566C 104 47.6706 103.105 48.566 102 48.566L 102 64.566ZM 102 48.566L 10 48.566L 10 64.566L 102 64.566L 102 48.566Z" fill="#4C2C13"/>
            </g>
          </g>
        </g>
        <g>
          <path fillRule="evenodd" clipRule="evenodd" d="M 1.40542 3.17615C 2.02709 0.900726 4.38049 -0.457886 6.66183 0.141662C 8.9432 0.74118 10.2887 3.07178 9.66698 5.3472L 8.41326 9.93606C 7.79159 12.2115 5.43822 13.5701 3.15685 12.9706C 0.875481 12.3711 -0.469978 10.0404 0.151695 7.76504L 1.40542 3.17615ZM 13.5221 3.17615C 14.1438 0.900726 16.4972 -0.457886 18.7785 0.141662C 21.0599 0.74118 22.4054 3.07178 21.7837 5.3472L 20.53 9.93606C 19.9083 12.2115 17.5549 13.5701 15.2736 12.9706C 12.9922 12.3711 11.6467 10.0404 12.2684 7.76504L 13.5221 3.17615ZM 30.8953 0.141662C 28.6139 -0.457886 26.2606 0.900726 25.6389 3.17615L 24.3852 7.76504C 23.7635 10.0404 25.1089 12.3711 27.3903 12.9706C 29.6717 13.5701 32.025 12.2115 32.6467 9.93606L 33.9004 5.3472C 34.5221 3.07178 33.1767 0.74118 30.8953 0.141662Z" transform="translate(75.9739 140.944)" fill="#FF7D7D"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M 1.40543 3.17615C 2.02707 0.900726 4.38047 -0.457886 6.66184 0.141662C 8.94321 0.74118 10.2886 3.07178 9.66697 5.3472L 8.41324 9.93606C 7.79154 12.2115 5.43821 13.5701 3.15684 12.9706C 0.875463 12.3711 -0.469996 10.0404 0.151708 7.76504L 1.40543 3.17615ZM 13.5221 3.17615C 14.1438 0.900726 16.4972 -0.457886 18.7785 0.141662C 21.0599 0.74118 22.4053 3.07178 21.7837 5.3472L 20.5299 9.93606C 19.9082 12.2115 17.5549 13.5701 15.2735 12.9706C 12.9922 12.3711 11.6467 10.0404 12.2684 7.76504L 13.5221 3.17615ZM 30.8953 0.141662C 28.6139 -0.457886 26.2605 0.900726 25.6389 3.17615L 24.3852 7.76504C 23.7635 10.0404 25.1089 12.3711 27.3903 12.9706C 29.6717 13.5701 32.025 12.2115 32.6467 9.93606L 33.9004 5.3472C 34.5221 3.07178 33.1767 0.74118 30.8953 0.141662Z" transform="translate(175.974 140.944)" fill="#FF7D7D"/>
        </g>
      </svg>
    );
  }
}

export default Queen;