import React, { useEffect, useMemo, useState, useRef } from 'react';
import { Form, Input, Modal } from 'antd';
import { useWhyDidYouUpdate } from 'ahooks';
import devWarning from '../_util/devWarning';
import { Prompt, history } from 'umi';
import * as H from 'history';
import {
  FormInstance,
  FormProps,
  FormItemProps,
  ErrorListProps,
  Rule,
  RuleObject,
  RuleRender,
  FormListProps,
} from 'antd/lib/Form';
import _MIForm from './form';

declare type InternalFormType = typeof _MIForm;
interface FormInterface extends InternalFormType {
  useForm: typeof Form.useForm;
  Item: typeof Form.Item;
  List: typeof Form.List;
  ErrorList: typeof Form.ErrorList;
  Provider: typeof Form.Provider;
}
export {
  FormInstance,
  FormProps,
  FormItemProps,
  ErrorListProps,
  Rule,
  RuleObject,
  RuleRender,
  FormListProps,
};
const MIForm: Partial<FormInterface> = _MIForm;
MIForm.Item = Form.Item;
MIForm.List = Form.List;
MIForm.ErrorList = Form.ErrorList;
MIForm.useForm = Form.useForm;
MIForm.Provider = Form.Provider;
console.log(MIForm);
export default MIForm;
