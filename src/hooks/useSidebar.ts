import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../store/slices/sidebarSlice";
import { RootState } from "../store/store";

export const useSidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  const toggle = () => dispatch(toggleSidebar());

  return {
    isOpen,
    toggle,
  };
};
