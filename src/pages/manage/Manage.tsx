import { useState } from "react";
import Category from "../../components/PagesComponents/Manage/Category";
import Materials from "../../components/PagesComponents/Manage/Materials";
import AddCategoryModal from "../../components/PagesComponents/Manage/AddCategoryModal";
import SubCategory from "../../components/PagesComponents/Manage/SubCategory";
import AddSubCategoryModal from "../../components/PagesComponents/Manage/AddSubCategoryModal";
import Questions from "../../components/PagesComponents/Manage/Questions";
import AddQuestion from "../../components/PagesComponents/Manage/AddQuestion";
import AddMaterials from "../../components/PagesComponents/Manage/AddMaterials";

type Tab = "category" | "sub category" | "questions" | "materials";

const Manage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [isSubCategoryModalOpen, setIsSubCategoryModalOpen] = useState<boolean>(false);
    const showSubCategoryModal = () => {
        setIsSubCategoryModalOpen(true);
    };
    const handleSubCategoryOk = () => {
        setIsSubCategoryModalOpen(false);
    };
    const handleSubCategoryCancel = () => {
        setIsSubCategoryModalOpen(false);
    };

    const [isQuestionOpen, setIsQuestionOpen] = useState<boolean>(false);
    const showQuestion = () => {
        setIsQuestionOpen(true);
    };
    const handleQuestionOk = () => {
        setIsQuestionOpen(false);
    };
    const handleQuestionCancel = () => {
        setIsQuestionOpen(false);
    };
    const [isMaterialsOpen, setIsMaterialsOpen] = useState<boolean>(false);
    const showMaterials = () => {
        setIsMaterialsOpen(true);
    };
    const handleMaterialsOk = () => {
        setIsMaterialsOpen(false);
    };
    const handleMaterialsCancel = () => {
        setIsMaterialsOpen(false);
    };

    const [activeTab, setActiveTab] = useState<Tab>("category");


    return (
        <div className=" bg-white rounded-md px-3 py-4 min-h-screen">
            <div className=" mb-5">
                <h2 className="text-md md:text-xl font-semibold ">Manage</h2>

            </div>
            <div className=" flex justify-between gap-4">
                <div className=" flex gap-4">
                    <button
                        onClick={() => setActiveTab("category")}
                        className={`cursor-pointer px-10 py-2 rounded-md  ${activeTab === "category"
                            ? "text-primary bg-primaryColor text-white"
                            : " border border-primaryColor"
                            }`}
                    >
                        Category
                    </button>
                    <button
                        onClick={() => setActiveTab("sub category")}
                        className={`cursor-pointer px-10 py-2 rounded-md  ${activeTab === "sub category"
                            ? "text-primary bg-primaryColor text-white"
                            : " border border-primaryColor"
                            }`}
                    >
                        Sub Category
                    </button>
                    <button
                        onClick={() => setActiveTab("questions")}
                        className={`cursor-pointer px-10 py-2 rounded-md  ${activeTab === "questions"
                            ? "text-primary bg-primaryColor text-white"
                            : " border border-primaryColor"
                            }`}
                    >
                        Questions
                    </button>
                    <button
                        onClick={() => setActiveTab("materials")}
                        className={`cursor-pointer px-10 py-2 rounded-md  ${activeTab === "materials"
                            ? "text-primary bg-primaryColor text-white"
                            : " border border-primaryColor"
                            }`}
                    >
                        Materials
                    </button>
                </div>
                <div>
                    {
                        activeTab === "category" &&
                        <button onClick={showModal} className=" bg-primaryColor py-2 px-4 rounded-md cursor-pointer text-white">+ Add</button>
                    }
                    {
                        activeTab === "materials" &&
                        <button onClick={showMaterials} className=" bg-primaryColor py-2 px-4 rounded-md cursor-pointer text-white">+ Add</button>

                    }
                    {
                        activeTab === "sub category" &&
                        <button onClick={showSubCategoryModal} className=" bg-primaryColor py-2 px-4 rounded-md cursor-pointer text-white">+ Add</button>
                    }
                    {
                        activeTab === "questions" &&
                        <button onClick={showQuestion} className=" bg-primaryColor py-2 px-4 rounded-md cursor-pointer text-white">+ Add</button>
                    }
                </div>
                <AddCategoryModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}></AddCategoryModal>
                <AddSubCategoryModal isModalOpen={isSubCategoryModalOpen} handleOk={handleSubCategoryOk} handleCancel={handleSubCategoryCancel}></AddSubCategoryModal>
                <AddQuestion isModalOpen={isQuestionOpen} handleOk={handleQuestionOk} handleCancel={handleQuestionCancel}></AddQuestion>
                <AddMaterials isModalOpen={isMaterialsOpen} handleOk={handleMaterialsOk} handleCancel={handleMaterialsCancel}></AddMaterials>
            </div>
            {activeTab === "category" && <Category />}
            {activeTab === "sub category" && <SubCategory />}
            {activeTab === "materials" && <Materials />}
            {activeTab === "questions" && <Questions />}
        </div>
    );
};

export default Manage;