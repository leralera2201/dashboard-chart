import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../store/reducers/rootReducer";
import {fetchDataRequest} from "../store/actions/coronaActions";
import {Line} from 'react-chartjs-2'
import {Alert, Spin} from "antd";

const Chart: React.FC = () => {
    const dispatch = useDispatch()
    const {coronaData, loading, error} = useSelector((state: RootReducerType) => state.corona)

    useEffect(() => {
       dispatch(fetchDataRequest())
    }, [])

    const lineChart = (
        coronaData && coronaData[0] ? (
            <Line
                data={{
                    labels: coronaData.map(({ date }) => date),
                    datasets: [{
                        data: coronaData.map((data) => data.confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: coronaData.map((data) => data.deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    },
                    ],
                }}
            />
        ) : null
    );

    return <div className="chart">
        {loading ?
        <Spin size='large'/>
        :
        error
        ?
        <Alert message={error} type="error" showIcon />
        :
        lineChart}
    </div>

}

export default Chart
