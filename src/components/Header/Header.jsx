import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { AppBar, AppBarSection, AppBarSpacer } from '@progress/kendo-react-layout';
import { Button } from "@progress/kendo-react-buttons";

const Header = ({ onToggleDrawer }) => {
    const navigate = useNavigate();
    
  return <React.Fragment>
        <AppBar>
          <AppBarSpacer />

          <AppBarSection>
            <Button onClick={()=>navigate("/process")} themeColor={"primary"}>Create Process</Button>
            <span className="k-appbar-separator" />
            <Button themeColor={"primary"} onClick={onToggleDrawer}>Start Process</Button>
          </AppBarSection>
        </AppBar>
        <style>{`
                body {
                    background: #dfdfdf;
                }
                .title {
                    font-size: 18px;
                    margin: 0;
                }
                .k-icon {
                    font-size: 18px;
                }
                .k-badge-container {
                    margin-right: 8px;
                }
                .k-appbar .k-appbar-separator {
                    margin: 0 8px;
                }
                .k-button k-button-md k-rounded-md k-button-solid k-button-solid-base {
                    padding: 0;
                }
            `}</style>
      </React.Fragment>;
};
export default Header;