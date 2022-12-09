import { Component, AnyRecord } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/**
 * @desc 编辑器初始化完成时触发
 */
interface _EditorOnReady {
  (event: BaseEvent): void;
}

interface _EditorOnFocusDetail {
  html: string;
  text: string;
  delta: AnyRecord;
}

/**
 * @desc 编辑器聚焦时触发
 */
interface _EditorOnFocus {
  (event: CustomEvent<_EditorOnFocusDetail>): void;
}

interface _EditorOnBlurDetail {
  html: string;
  text: string;
  delta: AnyRecord;
}

/**
 * @desc 编辑器失焦时触发
 */
interface _EditorOnBlur {
  (event: CustomEvent<_EditorOnBlurDetail>): void;
}

interface _EditorOnInputDetail {
  html: string;
  text: string;
  delta: AnyRecord;
}

/**
 * @desc 编辑器内容改变时触发
 */
interface _EditorOnInput {
  (event: CustomEvent<_EditorOnInputDetail>): void;
}

/**
 * @desc 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式
 */
interface _EditorOnStatuschange {
  (event: BaseEvent): void;
}

/**
 * @desc 编辑器属性
 */
interface _EditorProps {
  /**
   * @desc 是否只读
   * @desc 默认为 false
   */
  readOnly: boolean;
  /**
   * @desc 提示信息
   */
  placeholder: string;
  /**
   * @desc 点击图片时是否显示图片大小控件
   * @desc 默认为 false
   */
  showImgSize: boolean;
  /**
   * @desc 点击图片时是否显示工具栏控件
   * @desc 默认为 false
   */
  showImgToolbar: boolean;
  /**
   * @desc 点击图片时是否显示修改尺寸控件
   * @desc 默认为 false
   */
  showImgResize: string;
  /**
   * @desc 编辑器初始化完成时触发
   */
  onReady: _EditorOnReady;
  /**
   * @desc 编辑器聚焦时触发
   */
  onFocus: _EditorOnFocus;
  /**
   * @desc 编辑器失焦时触发
   */
  onBlur: _EditorOnBlur;
  /**
   * @desc 编辑器内容改变时触发
   */
  onInput: _EditorOnInput;
  /**
   * @desc 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式
   */
  onStatuschange: _EditorOnStatuschange;
}

/**
 * @desc 富文本编辑器，可以对图片、文字进行编辑和混排
 * @desc 编辑器导出内容支持带标签的 html 和纯文本的 text，编辑器内部采用 delta 格式进行存储
 * @desc 通过 setContents 接口设置内容时，解析插入的 html 可能会由于一些非法标签导致解析错误，建议开发者在应用内使用时通过 delta 进行插入
 * @desc 图片控件仅初始化时设置有效
 */
type _Editor = Component<Partial<_EditorProps>>;

export {
  _EditorOnReady as EditorOnReady,
  _EditorOnFocusDetail as EditorOnFocusDetail,
  _EditorOnFocus as EditorOnFocus,
  _EditorOnBlurDetail as EditorOnBlurDetail,
  _EditorOnBlur as EditorOnBlur,
  _EditorOnInputDetail as EditorOnInputDetail,
  _EditorOnInput as EditorOnInput,
  _EditorOnStatuschange as EditorOnStatuschange,
  _EditorProps as EditorProps,
  _Editor as Editor,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 编辑器初始化完成时触发
     */
    export interface EditorOnReady extends _EditorOnReady {}
    export interface EditorOnFocusDetail extends _EditorOnFocusDetail {}
    /**
     * @desc 编辑器聚焦时触发
     */
    export interface EditorOnFocus extends _EditorOnFocus {}
    export interface EditorOnBlurDetail extends _EditorOnBlurDetail {}
    /**
     * @desc 编辑器失焦时触发
     */
    export interface EditorOnBlur extends _EditorOnBlur {}
    export interface EditorOnInputDetail extends _EditorOnInputDetail {}
    /**
     * @desc 编辑器内容改变时触发
     */
    export interface EditorOnInput extends _EditorOnInput {}
    /**
     * @desc 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式
     */
    export interface EditorOnStatuschange extends _EditorOnStatuschange {}
    /**
     * @desc 编辑器属性
     */
    export interface EditorProps extends _EditorProps {}
    /**
     * @desc 富文本编辑器，可以对图片、文字进行编辑和混排
     * @desc 编辑器导出内容支持带标签的 html 和纯文本的 text，编辑器内部采用 delta 格式进行存储
     * @desc 通过 setContents 接口设置内容时，解析插入的 html 可能会由于一些非法标签导致解析错误，建议开发者在应用内使用时通过 delta 进行插入
     * @desc 图片控件仅初始化时设置有效
     */
    export type Editor = _Editor;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 富文本编辑器，可以对图片、文字进行编辑和混排
     * @desc 编辑器导出内容支持带标签的 html 和纯文本的 text，编辑器内部采用 delta 格式进行存储
     * @desc 通过 setContents 接口设置内容时，解析插入的 html 可能会由于一些非法标签导致解析错误，建议开发者在应用内使用时通过 delta 进行插入
     * @desc 图片控件仅初始化时设置有效
     */
    Editor: _Editor;
  }
}
