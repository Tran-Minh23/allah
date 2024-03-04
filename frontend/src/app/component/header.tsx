import Image from "next/image";

export default function Header() {
  return(
    <div className="container px-4 py-1">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <a>
            <Image alt="" width={185} height={53} src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/97f3e7a54e9c6987283b78e016664776.svg"></Image>
          </a>
        </div>

        <div className="col-span-9 flex justify-end">
          <div>
            <button>dsadsa</button>
          </div>
          
          <div>
            <button>dsadsa</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}
  