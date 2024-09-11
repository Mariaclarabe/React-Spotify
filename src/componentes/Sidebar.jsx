export default function Sidebar({children}){

    return (
        <aside className="bg-purple-200 w-1/4 flex flex-col justify-around items-center">
        
        {children}
      </aside>
    )
}