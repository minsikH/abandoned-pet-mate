import React, { Component } from "react";
import Axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Board = ({ id, title, registerId, registerDate }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{registerId}</td>
            <td>{registerDate}</td>
        </tr>
    );
};

class CommunityList extends Component {
    state = {
        boardList: [],
    };

    getList = () => {
        Axios.get("http://localhost:8000/list")
            .then((res) => {
                const { data } = res;
                this.setState({
                    boardList: data,
                });
            })
            .catch((e) => {
                console.error(e);
            });
    };

    componentDidMount() {
        this.getList();
    }

    render() {
        const { boardList } = this.state;




        function handleTabClick(tabIndex) {
            const tabs = document.querySelectorAll('.tabs p');
            const tabContents = document.querySelectorAll('.tab-contents > div');
        
            tabs.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
        
            tabs[tabIndex].classList.add('active');
            tabContents[tabIndex].classList.add('active');
        }
        

        const { tab } = this.props; // 탭 상태를 props로 받아옴



        return (
            <div className="community_list">
               <p className={tab === 0 ? "tab-content1" : "tab-content2"}>
                    {tab === 0 ? "자유게시판" : "자주묻는질문"}
                </p>

                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>작성일</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>7</td>
                                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita facere maiores ea aspernatur excepturi quae modi? Accusamus corporis voluptate voluptatibus. Delectus animi incidunt iusto perferendis officiis nemo, harum quisquam ut?</td>
                                <td>관리자</td>
                                <td>2024.05.05</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita facere maiores ea aspernatur excepturi quae modi? Accusamus corporis voluptate voluptatibus. Delectus animi incidunt iusto perferendis officiis nemo, harum quisquam ut?</td>
                                <td>관리자</td>
                                <td>2024.05.05</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita facere maiores ea aspernatur excepturi quae modi? Accusamus corporis voluptate voluptatibus. Delectus animi incidunt iusto perferendis officiis nemo, harum quisquam ut?</td>
                                <td>관리자</td>
                                <td>2024.05.05</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita facere maiores ea aspernatur excepturi quae modi? Accusamus corporis voluptate voluptatibus. Delectus animi incidunt iusto perferendis officiis nemo, harum quisquam ut?</td>
                                <td>관리자</td>
                                <td>2024.05.05</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita facere maiores ea aspernatur excepturi quae modi? Accusamus corporis voluptate voluptatibus. Delectus animi incidunt iusto perferendis officiis nemo, harum quisquam ut?</td>
                                <td>관리자</td>
                                <td>2024.05.05</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita facere maiores ea aspernatur excepturi quae modi? Accusamus corporis voluptate voluptatibus. Delectus animi incidunt iusto perferendis officiis nemo, harum quisquam ut?</td>
                                <td>관리자</td>
                                <td>2024.05.05</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita facere maiores ea aspernatur excepturi quae modi? Accusamus corporis voluptate voluptatibus. Delectus animi incidunt iusto perferendis officiis nemo, harum quisquam ut?</td>
                                <td>관리자</td>
                                <td>2024.05.05</td>
                            </tr>

                        </tbody>
                    </Table>
                    {tab === 0 && ( // 자유게시판 탭인 경우에만 버튼을 보여줍니다.
                        <div className="btn_area">
                            <Link to="/write">
                                <Button variant="info">글쓰기</Button>
                            </Link>
                        </div>
                    )}

                </div>
            </div>
        );
    }
}

export default CommunityList;
