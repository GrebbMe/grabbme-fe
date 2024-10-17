/* eslint-disable @typescript-eslint/typedef */
import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';
import { ChartContainer } from './BubbleChart.style';

interface Bubble {
  id: number;
  stack: string;
  cnt: string;
  radius: number;
  x?: number;
  y?: number;
}

const data: Bubble[] = [
  { id: 1, stack: 'React', cnt: '254명', radius: 40 },
  { id: 2, stack: 'Kotlin', cnt: '228명', radius: 36 },
  { id: 3, stack: 'Swift', cnt: '200명', radius: 32 },
  { id: 4, stack: 'Spring', cnt: '175명', radius: 28 },
  { id: 5, stack: 'Flutter', cnt: '169명', radius: 28 },
  { id: 6, stack: 'Tailwind', cnt: '', radius: 22 },
  { id: 7, stack: 'Django', cnt: '', radius: 22 },
  { id: 8, stack: 'NestJS', cnt: '', radius: 22 },
  { id: 9, stack: 'Figma', cnt: '', radius: 22 },
  { id: 10, stack: 'C++', cnt: '', radius: 22 },
];

const BubbleChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const width = chartRef.current.clientWidth;
    const height = chartRef.current.clientHeight;

    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const simulation = d3
      .forceSimulation<Bubble>(data)
      .force('charge', d3.forceManyBody().strength(0))
      .force('center', d3.forceCenter(width / 2, height / 2 - 7))
      .force(
        'collision',
        d3.forceCollide<Bubble>().radius((d) => d.radius + 1.2),
      )
      .force('attract', d3.forceManyBody().strength(10))
      .on('tick', ticked);

    const node = svg
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', (d) => d.radius)
      .attr('fill', '#EDF0F5')
      .attr('stroke', (d) => {
        return d.id <= 5 ? '#D9D9D9' : 'none';
      })
      .attr('stroke-width', 1)
      .attr('cx', (d) => width / 2)
      .attr('cy', () => Math.random() * height)
      .on('mouseover', function (event, d) {
        if (d.id <= 5) {
          d3.select(this).style('fill', '#8E98A9');

          // stack 텍스트 색상 변경
          d3.selectAll<SVGTextElement, Bubble>('text.stack')
            .filter((textData: Bubble) => textData.id === d.id)
            .style('fill', '#FFFFFF');

          // cnt 텍스트 추가
          svg
            .append('text')
            .attr('class', `cnt-${d.id}`)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .attr('fill', '#000')
            .text(d.cnt)
            .attr('x', d.x || 0)
            .attr('y', (d.y || 0) + 8) // cnt 위치 조정
            .style('font-family', 'Pretendard, sans-serif')
            .style('font-weight', '500')
            .style('font-size', '1rem')
            .style('fill', '#FFFFFF');

          d3.selectAll<SVGTextElement, Bubble>('text.stack')
            .filter((textData: Bubble) => textData.id === d.id)
            .attr('y', (d.y || 0) - 6); // stack 텍스트를 원 위로 이동
        }
      })
      .on('mouseout', function (event, d) {
        if (d.id <= 5) {
          d3.select(this).style('fill', '#EDF0F5');

          // stack 텍스트 색상 복원
          d3.selectAll<SVGTextElement, Bubble>('text.stack')
            .filter((textData: Bubble) => textData.id === d.id)
            .style('fill', '#1D3152');

          // cnt 텍스트 제거
          svg.selectAll(`.cnt-${d.id}`).remove();

          // stack 텍스트 원래 위치로 복원
          d3.selectAll<SVGTextElement, Bubble>('text.stack')
            .filter((textData: Bubble) => textData.id === d.id)
            .attr('y', d.y || 0);
        }
      });

    const text = svg
      .selectAll('text.stack')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'stack')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('fill', '#000')
      .text((d) => d.stack)
      .attr('x', (d) => width / 2)
      .attr('y', () => Math.random() * height)
      .style('font-family', 'Pretendard, sans-serif')
      .style('font-weight', '500')
      .style('font-size', '1.2rem')
      .style('fill', '#1D3152')
      .on('mouseover', function (event, d) {
        if (d.id <= 5) {
          d3.select(this).style('fill', '#FFFFFF');

          // stack 텍스트 색상 변경
          d3.selectAll<SVGTextElement, Bubble>('circle')
            .filter((textData: Bubble) => textData.id === d.id)
            .style('fill', '#8E98A9');

          // cnt 텍스트 추가
          svg
            .append('text')
            .attr('class', `cnt-${d.id}`)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .attr('fill', '#000')
            .text(d.cnt)
            .attr('x', d.x || 0)
            .attr('y', (d.y || 0) + 8) // cnt 위치 조정
            .style('font-family', 'Pretendard, sans-serif')
            .style('font-weight', '500')
            .style('font-size', '1rem')
            .style('fill', '#FFFFFF');

          d3.selectAll<SVGTextElement, Bubble>('text.stack')
            .filter((textData: Bubble) => textData.id === d.id)
            .attr('y', (d.y || 0) - 6); // stack 텍스트를 원 위로 이동
        }
      })
      .on('mouseout', function (event, d) {
        if (d.id <= 5) {
          d3.select(this).style('fill', '#1D3152');

          // stack 텍스트 색상 복원
          d3.selectAll<SVGTextElement, Bubble>('circle')
            .filter((textData: Bubble) => textData.id === d.id)
            .style('fill', '#EDF0F5');

          // cnt 텍스트 제거
          svg.selectAll(`.cnt-${d.id}`).remove();

          // stack 텍스트 원래 위치로 복원
          d3.selectAll<SVGTextElement, Bubble>('text.stack')
            .filter((textData: Bubble) => textData.id === d.id)
            .attr('y', d.y || 0);
        }
      });

    function ticked() {
      node.attr('cx', (d) => d.x || 0).attr('cy', (d) => d.y || 0);
      text.attr('x', (d) => d.x || 0).attr('y', (d) => d.y || 0);
    }

    return () => {
      simulation.stop();
      svg.remove();
    };
  }, []);

  return <ChartContainer ref={chartRef} />;
};

export default BubbleChart;
