import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <Path
      fill="#E9967A"
      d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z"
    />
    <Path
      fill="#510606"
      d="M21.325 16.91c-.042.687 1.278-.024 2.846.081 1.568.105 2.79.986 2.832.3.042-.687-1.17-1.735-2.738-1.84-1.568-.104-2.896.773-2.94 1.46z"
      opacity={0.2}
    />
    <Path
      fill="#FFF9F3"
      d="M16.392 23.326c-.775-1.984-4.355-13.194-4.406-13.687 5.306-1.25 8.849 1.946 9.396 4.83.001.054-1.467 8.489-1.576 9.261-.709-.499-2.561-.94-3.414-.404z"
    />
    <Path
      fill="#F9E7D4"
      d="M17.576 23.068c.785-.019 1.67.233 2.183.555.11-.709 1.538-9.014 1.559-9.156-.298-.97-1.511-2.408-3.482-3.303-1.633-.74-3.559-1.445-6.78.024-.125.6-.265 2.11-.242 2.529 1.524 2.835 5.296 8.446 5.76 9.584.276-.152.628-.223 1.002-.233z"
    />
    <Path
      fill="#FFF9F3"
      d="M22.36 17.24c-.17-.818-1.212-3.525-1.211-3.55l.003-.023c2.495-4.606 8.14-5.117 11.779-4.405 0 0 .883 2.845 1.075 3.933-1.008.76-11.646 4.045-11.646 4.045z"
    />
    <Path
      fill="#F9E7D4"
      d="M21.099 13.746c.054.431 2.16 5.222 2.372 6.382 1.145-.556 11.534-5.29 11.287-6.438-.102-.477-.691-2.524-.855-2.783C31.61 9.23 25.519 9 21.099 13.746z"
    />
    <Path
      fill="#481651"
      d="M22.246 13.606c.111.176-.723.86-1.606.948-.882.088-1.649-.415-1.677-.62-.014-.1 3.236-.402 3.283-.328z"
    />
    <Path
      fill="#F77295"
      d="M37.82 24.948c-.63-2.907-2.075-8.855-2.726-11.871-3.983-3.048-11.538-.654-12.844.292l-.1.08c-.823.8-2.55.829-3.115.27-1.267-1.252-5.25-2.901-8.594-.539.01.022-.106.301-.096.323 1.18 2.415 4.525 8.7 5.94 11.16 1.8-.294 5.906-.862 7.758.77.203.424 1.72.502 2.405-.127 5.161-2.595 9.74-.723 11.166-.22.03.01.178-.148.207-.138z"
    />
    <Path
      fill="#BF3452"
      d="M16.232 25.142c-1.414-2.458-4.755-9.31-5.888-11.638 3.53-2.56 7.873-.633 8.83.655 0 .053 4.891 10.63 4.782 11.402-2.302-1.303-5.17-1.25-7.724-.419zM37.612 25.084c-.625-2.878-2.061-8.776-2.707-11.765-3.945-3.019-11.424-.622-12.719.315-.002.054 3.933 11.057 4.093 11.824 4.007-1.024 10.004-.848 11.333-.373z"
    />
    <Path
      fill="#B22248"
      d="M23.956 25.56c.2.42 1.704.501 2.384-.122-.043-.175-4.094-11.832-4.094-11.832-.802.852-2.732.905-3.284.328l4.994 11.627z"
    />
    <Path
      fill="#000"
      d="M22.714 14.955l-.053.057c-.464.492-1.28.67-1.898.672-.526.003-.973-.122-1.188-.324l.158.368c.273.121.626.193 1.031.192.11 0 .227-.006.349-.018.587-.06 1.256-.268 1.687-.702a41.24 41.24 0 01-.086-.245zm3.036 8.757c-.473.342-1.13.485-1.656.486a2.626 2.626 0 01-.767-.104l.115.267c.215.048.434.073.654.072.11 0 .229-.006.35-.018.466-.046.98-.188 1.39-.46-.03-.077-.058-.16-.086-.243z"
      opacity={0.26}
    />
    <Path
      fill="#FFF8E9"
      d="M5.541 27.384C5.25 26.191 4.368 18.872 4.1 16.999c2.499-.57 8.26-.063 10.586 4.385.001.043-1.832 5.804-1.975 6.415-.89-.45-6.091-.784-7.169-.415z"
    />
    <Path
      fill="#F7E3BF"
      d="M5.548 27.416l-.014.005-.004-.019c-.204-.829-.697-4.658-1.058-7.455-.163-1.263-.39-2.951-.39-2.951l.016.002c1.133-.258 3.22-.338 5.366.303 1.678.501 3.952 1.627 5.24 4.091 0 .018-.074.26-.534 1.728-.538 1.713-1.352 4.296-1.444 4.69l-.01.02c-.914-.461-6.143-.764-7.168-.414zM4.12 17.032c.083.581.222 1.66.383 2.907.357 2.775.847 6.568 1.052 7.43.603-.196 2.336-.174 3.646-.095 1.398.084 3.012.268 3.5.502.114-.456 1.953-6.307 1.972-6.376-2.367-4.515-8.223-4.89-10.553-4.368z"
    />
    <Path
      fill="#F9E7D4"
      d="M3.932 23.878c-.047-.107-.379-4.794-.468-5.655 2.308-1.025 8.207-.65 11.267 3.218.001.043-1.878 5.747-2.021 6.357-.89-.45-7.553-3.179-8.778-3.92z"
    />
    <Path
      fill="#F7E3BF"
      d="M12.704 27.818c-.32-.162-1.418-.631-2.69-1.175-2.238-.959-5.312-2.28-6.096-2.754-.026-.06-.115-1.193-.259-3.052-.087-1.15-.213-2.63-.213-2.63l.013-.005c1.254-.557 3.357-.646 5.359-.226 2.469.517 4.578 1.756 5.928 3.464 0 .017-.068.23-.52 1.626-.561 1.728-1.406 4.345-1.5 4.744l-.01.02-.012-.012zm-3.892-9.8c-1.99-.417-4.08-.33-5.331.22.04.391.122 1.461.21 2.593.105 1.363.224 2.905.252 3.03.792.476 3.848 1.784 6.082 2.74 1.303.558 2.34 1.006 2.677 1.175.116-.466 1.989-6.25 2.011-6.327-1.346-1.698-3.441-2.916-5.9-3.43z"
    />
    <Path
      fill="#FFF8E9"
      d="M22.88 27.413c1.015-1.64.48-3.124 1.6-4.698.286-.403.684-3.702 1.013-5.573-2.481-.59-7.88-.319-10.72 4.193-.003.043 1.4 5.866 1.524 6.477a8.593 8.593 0 013.04-.832 8.46 8.46 0 013.543.433z"
    />
    <Path
      fill="#F7E3BF"
      d="M15.328 23.758c-.48-2.02-.567-2.419-.565-2.438 1.243-1.975 3.145-3.363 5.503-4.016 2.044-.566 4.042-.466 5.23-.184l.016.004s-.21 1.3-.323 2.04c-.244 1.614-.497 3.283-.698 3.566-.577.811-.71 1.582-.85 2.399-.127.74-.274 1.51-.767 2.305A8.495 8.495 0 0019.337 27a8.542 8.542 0 00-3.035.832l-.016.008s-.563-2.428-.958-4.084zm7.546 3.63c.481-.781.611-1.538.737-2.268.135-.786.275-1.6.858-2.42.195-.273.446-1.936.69-3.544.11-.73.215-1.421.315-1.996-2.824-.665-7.983-.097-10.684 4.181.022.116 1.434 6.04 1.518 6.444a8.558 8.558 0 013.028-.827 8.84 8.84 0 01.796-.032c.95.003 1.884.16 2.742.463z"
    />
    <Path
      fill="#F9E7D4"
      d="M24.418 24.151c.05-.106 1.412-4.901 1.613-5.799-2.415-1.249-8.011-1.058-11.257 2.983-.003.042 1.4 5.866 1.524 6.477.904-.443 6.87-2.93 8.12-3.66z"
    />
    <Path
      fill="#F7E3BF"
      d="M15.328 23.758c-.48-2.02-.567-2.418-.565-2.438 1.846-2.298 4.254-3.162 5.95-3.482 1.976-.371 4.016-.183 5.325.494l.014.007-.005.02c-.214.955-1.578 5.72-1.622 5.812-.823.483-3.71 1.734-5.818 2.647-1.114.483-1.994.864-2.301 1.015l-.016.008s-.567-2.428-.962-4.084zm10.683-5.392c-1.304-.668-3.331-.854-5.296-.485-1.688.318-4.085 1.176-5.925 3.46.025.124 1.434 6.04 1.518 6.443.322-.156 1.191-.532 2.288-1.007 2.104-.912 4.981-2.159 5.81-2.643.075-.2 1.382-4.783 1.605-5.768z"
    />
    <Path
      fill="#CF79DB"
      d="M26.277 19.909c-.09-.097-.113-.118-.221-.22-4.053-1.04-7.583-.077-9.853 1.644-.088.662-.432 7.418-.285 8.276 3.238-.972 7.465-10.336 10.359-9.7zM3 19.909c.09-.097.113-.118.22-.22 4.054-1.04 7.584-.077 9.854 1.644.088.662.433 7.418.285 8.276-3.237-.972-7.465-10.336-10.359-9.7z"
    />
    <Path
      fill="#A841B7"
      d="M5.445 29.188c-.65-2.641-1.772-6.422-2.445-9.28 4.101-1.264 7.766-.054 10.036 1.617.088.643.61 7.393.462 8.225-3.238-.944-5.159-1.18-8.053-.562z"
    />
    <Path
      fill="#FFA727"
      d="M12.427 28.756l-.02-.003c-2.423-.706-3.994-.95-6.368-.445a.075.075 0 01-.088-.059c-.234-.95-.54-2.072-.865-3.26-.387-1.413-.786-2.874-1.079-4.117a.08.08 0 01.052-.097c2.77-.854 5.776-.37 8.042 1.296a.084.084 0 01.03.054c.061.45.489 5.889.368 6.566a.08.08 0 01-.033.053.073.073 0 01-.039.012zm-4.044-.877c1.27 0 2.461.255 3.98.695.074-.905-.286-5.668-.373-6.392-2.206-1.609-5.12-2.085-7.819-1.275.29 1.224.681 2.654 1.06 4.038.316 1.158.616 2.254.848 3.19a11.17 11.17 0 012.304-.256z"
      opacity={0.56}
    />
    <Path
      fill="#A841B7"
      d="M23.832 29.188c.648-2.641 1.772-6.422 2.445-9.28-4.101-1.265-7.766-.055-10.036 1.616-.088.643-.61 7.393-.462 8.225 3.238-.943 5.159-1.178 8.053-.561z"
    />
    <Path
      fill="#FFA727"
      d="M16.81 28.743a.08.08 0 01-.033-.052c-.12-.678.307-6.116.367-6.566a.083.083 0 01.031-.055c2.266-1.665 5.27-2.15 8.042-1.296a.08.08 0 01.052.097c-.293 1.244-.692 2.705-1.079 4.118a135.034 135.034 0 00-.865 3.26.075.075 0 01-.088.058c-2.374-.505-3.945-.26-6.368.445l-.02.003a.074.074 0 01-.04-.012zm6.388-.607c.232-.937.532-2.033.848-3.191.379-1.384.77-2.814 1.06-4.038-2.7-.81-5.613-.334-7.819 1.275-.088.724-.447 5.488-.374 6.393 1.52-.441 2.71-.696 3.981-.696.718 0 1.461.081 2.304.257z"
      opacity={0.56}
    />
    <Path
      fill="#481651"
      d="M13.058 21.516c-.002.132.667.397 1.568.4.902.004 1.637-.262 1.616-.39-.015-.092-.716-.318-1.618-.322-.901-.003-1.566.237-1.566.312z"
    />
    <Path
      fill="#CF79DB"
      d="M16.207 22.373c.006-.41.034-.798.037-1.072-1.196.301-2.1.321-3.187.018-.017.181.073.967.051 1.183.777.35 2.449.468 3.099-.128z"
    />
    <Path
      fill="#8B2D9B"
      d="M15.779 29.75c.096-2.244.353-5.5.462-8.226-1.184.227-2.097.287-3.183-.009-.003.65.074 6.782.137 8.147.445.405 1.934.46 2.584.087z"
    />
    <Path
      fill="#000"
      d="M13.068 22.75l-.002-.225c.251.242.888.411 1.704.411.59 0 1.085-.09 1.416-.228l-.01.195a.642.642 0 01-.057.026c-.357.119-.836.184-1.348.184-.673 0-1.332-.121-1.703-.363zM14.61 29.022c-.53 0-1.06-.07-1.442-.22l-.005-.193c.33.145.843.237 1.446.237.486 0 .9-.065 1.222-.163l-.01.185a4.557 4.557 0 01-1.21.154z"
      opacity={0.26}
    />
  </Svg>
)

const SVGKeChuyen = memo(SvgComponent)
export default SVGKeChuyen