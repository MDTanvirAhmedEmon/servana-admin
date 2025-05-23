/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, Modal, Upload } from "antd";
import { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";


type AddSubCategoryModalProps = {
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
};

const AddSubCategoryModal = ({ isModalOpen, handleOk, handleCancel }: AddSubCategoryModalProps) => {

    const [form] = Form.useForm();
    const [fileList, setFileList] = useState<any[]>([]);

    const handleFileChange = (info: any) => {
        if (info.fileList.length > 1) {
            setFileList(info.fileList.slice(-1));
        } else {
            setFileList(info.fileList);
        }
    };


    const onFinish = (values: any) => {
        console.log("Form Values: ", values);
    };

    return (
        <Modal centered footer={false} title="Add Sub Category" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form
                form={form}
                initialValues={undefined}
                onFinish={onFinish}
                layout="vertical"
            >
                <Form.Item
                    name="category"
                    label="Sub Category Name"
                    rules={[{ required: true, message: "Please input the sub category name!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="categoryImage"
                    label="Sub Category Image"
                    valuePropName="fileList"
                    getValueFromEvent={(e: any) => e?.fileList}
                    rules={[{ required: true, message: "Please upload the sub category image!" }]}
                >
                    <Upload
                        name="categoryImage"
                        listType="picture"
                        fileList={fileList}
                        onChange={handleFileChange}
                        beforeUpload={() => false} // Prevent auto upload
                        accept="image/*"
                    >
                        <Button icon={<MdOutlineFileUpload />}>Upload Image</Button>
                    </Upload>
                </Form.Item>

                <Form.Item>
                    <button
                        type="submit"
                        className="rounded-lg font-semibold cursor-pointer bg-primaryColor text-white px-3 py-2"
                    >
                        Add Sub Category
                    </button>
                </Form.Item>
            </Form>
        </Modal>

    );
};

export default AddSubCategoryModal;