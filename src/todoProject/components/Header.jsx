import { memo } from "react";

const Header = () => {
	return (
		<div>
			<div>오늘은 📆</div>
			<div></div>
		</div>
	);
};

//메모제이션(최적화)된 Header 컴포넌트
export default memo(Header);
