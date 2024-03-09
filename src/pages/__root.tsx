import { Button } from '@mui/material'
import { Link, Outlet, RootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = new RootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2 text-lg">
        <Button
          color='secondary'
          variant='contained'
          component={Link}
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Hi
        </Button>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
})