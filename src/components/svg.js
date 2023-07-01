export default function Rectsvg(){
    return(
        <>
        <svg width="50" height="50">
            <defs>
              <linearGradient id="myGradient">
                <stop offset="0%" stop-color="#CFF1FF" />
                <stop offset="100%" stop-color="#2D5666" />
              </linearGradient>
            </defs>
            <rect
              x="0"
              y="0"
              rx="8"
              ry="8"
              width="50"
              height="50"
              stroke="url(#myGradient)"
            />
          </svg>
        </>
    )
}