import React from "react";
import PropTypes from "prop-types";
import BadgeWrapper, {Count} from "./style";

function Badge({
	children,
	variant,
	badgeNumber,
	showBadgeDot, 
	showBadgeNumber,
	...rest
}) {
	return (
		<BadgeWrapper
			variant={children? 'dot':"number"}
			showBadgeDot={showBadgeDot}
			showBadgeNumber={showBadgeNumber}
			badgeNumber={badgeNumber}
			{...rest}
		>
			{children || <Count>{badgeNumber}</Count>}
		</BadgeWrapper>
	);
}

Badge.propTypes = {
	showBadgeDot: PropTypes.bool,
	showBadgeNumber: PropTypes.bool,
	badgeNumber: PropTypes.number,
};

export default Badge;
