import Image from "next/image"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image src="/logo.svg" alt="Elanix Enterprise Logo" width={45} height={45} className="mr-2" />
    </div>
  )
}
