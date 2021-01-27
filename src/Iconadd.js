import React, {useContext,useState} from 'react'
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';

function  Iconadd(metod) {
  
  const [open, setOpen] = React.useState(false);
  const [iconflag,seticonflag] = useState('star');
  
  
    const handleTooltipClose = () => {
      setOpen(false);
      seticonflag("star");
    };
  
    const handleTooltipOpen = () => {
      setOpen(true);
      seticonflag("home");
    }; 
return(
<Tooltip
  PopperProps={{
    disablePortal: true,
  }}
  onClose={handleTooltipClose}
  open={open}
  disableFocusListener
  disableHoverListener
  disableTouchListener
  title="MPOT - минимальный размер оплаты труда.Разный для разных регионов."
>
  <Icon

    onClick={handleTooltipOpen}
    className="materials-icons"
  >
    {iconflag}
  </Icon>
</Tooltip>
)
}
export default Iconadd