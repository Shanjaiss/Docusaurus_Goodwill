import React from "react";
import { Row, Col, Typography } from "antd";
import Link from "@docusaurus/Link";

const { Text } = Typography;

export default function Footer() {
  return (
    <footer className="footer-container">
      <Row className="footer-parah">
        <Col xs={24} md={20} lg={18}>
          <Text type="secondary" style={{ fontSize: 12 }}>
            Goodwill Wealth Management Pvt Ltd | MCX : 11095 | SEBI Regn. No :
            INZ000177036 MSEI : 11240 | NSE : 90097 | BSE : 6648 Clearing Code |
            NSE : M52003 | BSE : 6648 CDSL DP | DP ID : 12084200 | SEBI Regn. No
            : IN - DP - CDSL - 309 - 2017 Research Analyst | SEBI Regn. No :
            INH200005179 Mutual Funds | ARN : 182218
          </Text>
        </Col>
      </Row>

      <Row className="footer-parah">
        <Col xs={24} md={20} lg={18}>
          <Text type="secondary" style={{ fontSize: 12 }}>
            Proprietary Trading Disclosure: In terms of provisions of the Rules,
            Bye-Laws and Business Rules of the Exchange and with reference to
            circular MCX/T&S/147/2016 dated May 17, 2016 regarding Disclosure of
            Proprietary Account Trading by broker to client. Pursuant to SEBI
            Circular Number SEBI/MRD/SEC/Cir-42/2003 dated November 19, 2003 &
            SEBI/HO/CDMRD/DMP/CIR/P/2016/49 dated April 25, 2016 GOODWILL WEALTH
            MANAGEMENT PVT LTD. Discloses to its clients about its policies on
            proprietary trades.
          </Text>
        </Col>
      </Row>

      <Row className="footer-parah">
        <Col xs={24} md={20} lg={14}>
          <Text type="secondary" style={{ fontSize: 12 }}>
            CopyRights © {new Date().getFullYear()}. All rights Reserved
            GOODWILL
          </Text>
        </Col>
        <Col xs={24} md={20} lg={4}>
          <Text type="secondary" style={{ fontSize: 12 }}>
            Developed by{" "}
            <Link
              href="https://www.finfolab.com/"
              target="_blank"
              style={{ fontSize: 12 }}
            >
              Finfolab Technology
            </Link>
          </Text>
        </Col>
      </Row>
    </footer>
  );
}
