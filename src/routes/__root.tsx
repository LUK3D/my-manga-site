import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import HeaderComponent from '../components/header'

export const Route = createRootRoute({
    component: () => (
        <>
            <div className='w-screen h-screen overflow-x-hidden overflow-y-scroll bg-gray-950 dark flex flex-col  items-center relative'>
                <HeaderComponent></HeaderComponent>
                <div className='flex flex-col w-full max-w-[1200px]  pt-20 '>
                    <Outlet />
                </div>
            </div>
            <TanStackRouterDevtools />
        </>
    ),
})