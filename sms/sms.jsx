import Link from "next/link";
import { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { updateItem } from "./functional";
import SmsPrimaryOffCanvas from "./sms-primary-offcanvas";

const Sms = () => {

    // const [show, setShow] = useState(false);
    // const [result, setResult] = useState(false);
    // const [data, setData] = useState({
    //     title: "",
    //     type: "",
    //     content: "",
    //     dataObject: "",
    //     singleObject: "",
    // });

    // const [canvasWidth, setCanvasWidth] = useState();

    // const callBack = (action, item, appName) => {
    //     switch (action) {
    //         case "add_campaign":
    //             setShow(true);
    //             setData((prevData) => ({
    //                 ...prevData,
    //                 content: (
    //                     <AddCampaign
    //                         item={item}
    //                         setShow={setShow}
    //                         callBack={callBack}
    //                         isEdit={false}
    //                         setResult={setResult}
    //                     />
    //                 ),
    //                 type: "add",
    //                 title: "Create Email Campaign",
    //             }));
    //             setCanvasWidth("40%");
    //             break;
    //     }
    // };

    const handleDeleteClick = (item) => {
        const data = { row_guid: item?.row_guid, is_deleted: 1 };
        confirmAlert({
            title: "",
            message: "Are you sure, you want to delete this record?",
            buttons: [
                {
                    label: "Cancel",
                },
                {
                    label: "Delete",
                    onClick: () => updateItem(data, setResult),
                },
            ],
        });
    };
    return (
      <>
        <div className="mb-3 d-flex justify-content-between">
          <h4 className="heading">SMS</h4>

          <Button variant="primary" as="a" href="/sms/add-sms">
            Create SMS
          </Button>
        </div>
        <Form>
          <div className="table-responsive">
            <Table>
              <tbody>
                <tr>
                  <td width={20}>
                    <Form.Check
                      type="checkbox"
                      name="checkbox"
                      id="seekingApproval"
                      label=""
                    />
                  </td>

                  <td>
                    <div>
                      <Link className="fw-600" href="/campaign/123">
                        SMS templates
                      </Link>{" "}
                      <br />
                      <span>#1. last Edited On March 10, 2025 1:55 PM</span>
                    </div>
                  </td>
                  <td width={120}>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="dot"></div>
                      <span>Inactive </span>
                    </div>
                  </td>

                  <td width={180} className="table-icons text-end">
                    <Link href="#" onClick={() => console.log("data")}>
                      Edit
                    </Link>
                    <Link href="#" onClick={() => console.log("data")}>
                      Delete
                    </Link>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Form>

        {/* <SmsPrimaryOffCanvas
                show={show}
                setShow={setShow}
                data={data}
                callBack={callBack}
                canvasWidth={canvasWidth}
            /> */}
      </>
    );
};
export default Sms;
