/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface BardFactoryInterface extends ethers.utils.Interface {
  functions: {
    "createBard(string,string,string)": FunctionFragment;
    "deployedBards(uint256)": FunctionFragment;
    "getDeployedBards()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createBard",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "deployedBards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDeployedBards",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "createBard", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deployedBards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDeployedBards",
    data: BytesLike
  ): Result;

  events: {};
}

export class BardFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: BardFactoryInterface;

  functions: {
    createBard(
      _contractName: string,
      _contractSymbol: string,
      _newuri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createBard(string,string,string)"(
      _contractName: string,
      _contractSymbol: string,
      _newuri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deployedBards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "deployedBards(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getDeployedBards(overrides?: CallOverrides): Promise<[string[]]>;

    "getDeployedBards()"(overrides?: CallOverrides): Promise<[string[]]>;
  };

  createBard(
    _contractName: string,
    _contractSymbol: string,
    _newuri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createBard(string,string,string)"(
    _contractName: string,
    _contractSymbol: string,
    _newuri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deployedBards(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "deployedBards(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getDeployedBards(overrides?: CallOverrides): Promise<string[]>;

  "getDeployedBards()"(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    createBard(
      _contractName: string,
      _contractSymbol: string,
      _newuri: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "createBard(string,string,string)"(
      _contractName: string,
      _contractSymbol: string,
      _newuri: string,
      overrides?: CallOverrides
    ): Promise<void>;

    deployedBards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "deployedBards(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getDeployedBards(overrides?: CallOverrides): Promise<string[]>;

    "getDeployedBards()"(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {};

  estimateGas: {
    createBard(
      _contractName: string,
      _contractSymbol: string,
      _newuri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createBard(string,string,string)"(
      _contractName: string,
      _contractSymbol: string,
      _newuri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deployedBards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "deployedBards(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDeployedBards(overrides?: CallOverrides): Promise<BigNumber>;

    "getDeployedBards()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createBard(
      _contractName: string,
      _contractSymbol: string,
      _newuri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createBard(string,string,string)"(
      _contractName: string,
      _contractSymbol: string,
      _newuri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deployedBards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "deployedBards(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDeployedBards(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getDeployedBards()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}