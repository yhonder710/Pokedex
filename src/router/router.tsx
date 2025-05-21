import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Layout } from "../components/organismo/Layout"

export const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
