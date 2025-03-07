import React from "react";
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/scatter";
import "echarts/lib/chart/radar";

import "echarts/lib/chart/map";
import "echarts/lib/chart/treemap";
import "echarts/lib/chart/graph";
import "echarts/lib/chart/gauge";
import "echarts/lib/chart/funnel";
import "echarts/lib/chart/parallel";
import "echarts/lib/chart/sankey";
import "echarts/lib/chart/boxplot";
import "echarts/lib/chart/candlestick";
import "echarts/lib/chart/effectScatter";
import "echarts/lib/chart/lines";
import "echarts/lib/chart/heatmap";

import "echarts/lib/component/graphic";
import "echarts/lib/component/grid";
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/polar";
import "echarts/lib/component/geo";
import "echarts/lib/component/parallel";
import "echarts/lib/component/singleAxis";
import "echarts/lib/component/brush";

import "echarts/lib/component/title";

import "echarts/lib/component/dataZoom";
import "echarts/lib/component/visualMap";

import "echarts/lib/component/markPoint";
import "echarts/lib/component/markLine";
import "echarts/lib/component/markArea";

import "echarts/lib/component/timeline";
import "echarts/lib/component/toolbox";

// 引入 ECharts 主模块
import echarts from "echarts/lib/echarts";
import ReactEchartsCore from "echarts-for-react/lib/core";
import PropTypes from "prop-types";
import "./index.less";

function Charts(props) {
  /**
   * @description 雷达图选中区域点击事件和外部显示标签点击事件
   * @param {any} param
   * @param {any} echarts
   * @memberof EchartsRadar
   */
  const onChartClick = (param) => {
    console.log(param);
  };

  /**
   * @description 点击legend事件
   * @param {any} param
   * @param {any} echarts
   * @memberof EchartsRadar
   */
  const onChartLegendselectchanged = (param) => {
    console.log(param);
  };

  const onEvents = {
    click: onChartClick,
    legendselectchanged: onChartLegendselectchanged,
  };
  return (
    <div className="components-charts">
      <ReactEchartsCore
        echarts={echarts}
        option={props.options}
        notMerge={true}
        lazyUpdate={true}
        onEvents={onEvents}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

Charts.propTypes = {
  history: PropTypes.object,
  options: PropTypes.object,
};

export default Charts;
