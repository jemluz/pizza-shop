import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  // use this hook to get the current path
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    />
  )
}

// data-[current=true]:text-foreground = if data-current is true, apply the style
//
