import React from "react";
import PropTypes from "prop-types";
import NavbarWrapper, { WrapperMenuItem, MenuIcon, MenuItemList} from "./style";
import Badge from "components/Badge";
import Avatar from "components/Avatar";
import {
	faCommentDots,
	faUsers,
	faFolder,
	faStickyNote,
	faEllipsisH,
	faCog,
} from "@fortawesome/free-solid-svg-icons";
import "styled-components/macro"

function Navbar({ portrait, ...rest }) {
	return (
		<NavbarWrapper {...rest}>
			<Avatar portrait={portrait} status showStatus size="80px"></Avatar>
			<MenuItemList>
				<MenuItem icon={faCommentDots} active showBadge></MenuItem>
				<MenuItem icon={faUsers}></MenuItem>
				<MenuItem icon={faFolder}></MenuItem>
				<MenuItem icon={faStickyNote}></MenuItem>
				<MenuItem icon={faEllipsisH}></MenuItem>
				<MenuItem icon={faCog} css={`align-self: end;`}></MenuItem>
			</MenuItemList>
		</NavbarWrapper>
	);
}
function MenuItem({ active, icon, showBadge, ...rest }) {
	return (
		<WrapperMenuItem active={active} {...rest}>
			<a>
				<Badge showBadgeDot={showBadge}>
					<MenuIcon icon={icon} active={active} />
				</Badge>
			</a>
		</WrapperMenuItem>
	);
}

Navbar.propTypes = {};

MenuItem.propTypes = {
	active: PropTypes.bool,
	icon: PropTypes.element,
	showBadge: PropTypes.bool,
};

export default Navbar;
export { MenuItem };
