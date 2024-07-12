import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function SifarisDetail() {
  const tableData = [
    {
      id: 1,
      firm: "ABC Construction",
      withoutVAT: "10,00,000",
      VAT: "13,00,000",
      withVAT: "11,30,000",
      difference: "10%",
      startDate: "2023-01-01",
      endDate: "2023-12-31",
      bidBond: "100000",
      documents: "View",
      status: "Active",
    },
    {
      id: 2,
      firm: "XYZ Builders",
      withoutVAT: "15,00,000",
      VAT: "19,50,000",
      withVAT: "16,95,000",
      difference: "11%",
      startDate: "2023-02-01",
      endDate: "2023-11-30",
      bidBond: "100000",
      documents: "View",
      status: "Pending",
    },
    {
      id: 3,
      firm: "LMN Constructions",
      withoutVAT: "12,00,000",
      VAT: "15,60,000",
      withVAT: "13,60,000",
      difference: "12%",
      startDate: "2023-03-01",
      endDate: "2023-10-31",
      bidBond: "100000",
      documents: "View",
      status: "Completed",
    },
  ];

  const documentData = [
    {
      title: " दरभाउपत्र/वोलपत्र स्वीकृत सम्बन्धमा ",
      submittedBy: "By User2341",
    },
    {
      title: " दरभाउपत्र/वोलपत्र स्वीकृत सम्बन्धमा ",
      submittedBy: "By User2341",
    },
    {
      title: " दरभाउपत्र/वोलपत्र स्वीकृत सम्बन्धमा ",
      submittedBy: "By User2341",
    },
    {
      title: " दरभाउपत्र/वोलपत्र स्वीकृत सम्बन्धमा ",
      submittedBy: "By User2341",
    },
  ];

  return (
    <React.Fragment>
      <div className="sifaris-main   p-3 p-lg-4">
        <div className="sifaris-header">
          <ol className="breadcrumb fs-sm mb-1">
            <li className="breadcrumb-item active" aria-current="page">
              Safari list
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              safari details
            </li>
          </ol>
        </div>
        <p className="sifaris-title">
          लक्ष्मीनगर खानेपानी बाेरिड. जडान - 2081-1018
        </p>

        <div className="tab-header">
          <Button content="विवरण" />
          <Button content="लागत अनुमान" />
          <Button danger content="टेन्डर Application" />
        </div>
        <div className="sifaris-tabled table-responsive">
          <table class="table table-bordered table-striped">
            <thead>
              <tr clas>
                <th scope="col">निर्माण व्यासायी / फर्म</th>
                <th scope="col">Without VAT</th>
                <th scope="col">VAT</th>
                <th scope="col">With VAT</th>
                <th scope="col">फरक %</th>
                <th scope="col">शुरू मिति</th>
                <th scope="col">अन्तिम मिति</th>
                <th scope="col">Bid Bond</th>
                <th scope="col">Documents</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id}>
                  {Object.keys(row)
                    .filter((key) => key !== "id")
                    .map((key, index) => (
                      <td
                        key={index}
                        className={key === "documents" ? "centered-cell" : ""}
                      >
                        {key === "documents" ? (
                          <Link href="#" className="centered-content">
                            <i class="ri-eye-line"></i>
                          </Link>
                        ) : (
                          row[key]
                        )}
                      </td>
                    ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="container-fluid action-container">
          <div className="row">
            <div className="col cols-1">
              <div className="safari-title-container">
                <p>Tender Documents</p>
                <div>
                  <i class="ri-add-circle-line"></i>
                  <span>Add</span>
                </div>
              </div>

              <ul className="document-list-container">
                {documentData?.map((item, idx) => (
                  <li key={idx} className="document-list">
                    <i class="ri-book-fill"></i>
                    <div>
                      <span>{item?.title}</span>
                      <span>{item?.submittedBy}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col org-cta">
              <p className="title">
                संचालन गर्ने उपभोक्ता समिति / संस्था छान्नुहोस्
              </p>
              <p className="content">पप्पु कन्स्ट्रक्सन</p>
              <button>धरौटी रकम सहित ठेक्का सम्झौता पठाउनुहोस्</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
