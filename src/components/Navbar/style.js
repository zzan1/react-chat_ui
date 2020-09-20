import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { activeBar } from "utils/mixin";
import AvatarWrapper, { Status } from "components/Avatar/style";

const NavbarWrapper = styled.nav`
	display: grid;
	grid-template-rows: 1fr 4fr;

	width: 100px;
	height: 100vh;
	padding: 30px 0;
	background-color: ${(props) => props.theme.darkPurple};

	${AvatarWrapper} {
		justify-self: center;
		${Status} {
			&::before {
				background-color: ${(props) => props.theme.darkPurple};
			}
		}
	}
`;
const MenuItemList = styled.div`
	display: grid;
	grid-template-rows: repeat(5, minmax(auto, 88px)) 1fr;
	align-items: center;
	justify-items: center;
`;
const WrapperMenuItem = styled.div`
	width: 100%;
	& > a {
		width: 100%;
		height: 74px;

		display: flex; align-items: center;
		justify-content: center;

		${activeBar()};
		${(props) => (props.active ? "" : "&::after, &::before {height: 0px}")}
	}
`;

const MenuIcon = styled(FontAwesomeIcon)`
	color: white;
	fontsize: 24px;
	${(props) => (props.active ? "" : "opacity: 0.3")};
`;
export default NavbarWrapper;
export { WrapperMenuItem, MenuIcon, MenuItemList };
