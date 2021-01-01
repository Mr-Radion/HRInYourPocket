export interface IauthProps {
  email: string;
  password: string;
  firstName?: string;
}

export type AuthProps = {
  onClickAuth: (email: string, password: string, firstName?: string) => void;
};

export type AuthState = {
  value: string;
  name: string;
};

export type ModalProps = {
  modalOpened: boolean;
  children: any;
  onCancel(): void;
};

// export type ActionsTypes = InferActionsTypes<typeof actions>;
