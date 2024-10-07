import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Title, Column, Row, Wrapper, JaTenhoContaText, FazerLoginText, TitleCrieSuaConta, SubtitleCrieSuaConta, RowJaTenhoConta } from './styles';

const schema = yup.object({
    nome: yup.string().required('Campo obrigatório'),
    email: yup.string().email('email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Cadastro = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    return (
    <>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais 
                    rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleCrieSuaConta>Comece agora grátis</TitleCrieSuaConta>
                    <SubtitleCrieSuaConta>Crie sua conta e make the change._</SubtitleCrieSuaConta>
                    <form>
                        <Input placeholder="Nome completo" leftIcon={<MdPerson />} name="nome" errorMessage={errors?.nome?.message} control={control}/>
                        <Input placeholder="E-mail" leftIcon={<MdEmail/>} name="email" errorMessage={errors?.email?.message} control={control} />
                        <Input placeholder="Senha" type="password" leftIcon={<MdLock />} name="password" errorMessage={errors?.password?.message} control={control} />
                        <Button title="Criar minha conta" variant="secondary" type="submit"/>
                    </form>
                    <Row>
                        <SubtitleCrieSuaConta>Ao clicar em "criar minha conta grátis",
                            declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </SubtitleCrieSuaConta>
                    </Row>
                    <RowJaTenhoConta>
                        <JaTenhoContaText>Já tenho conta</JaTenhoContaText>
                        <FazerLoginText>Fazer login</FazerLoginText>
                    </RowJaTenhoConta>
                </Wrapper>
            </Column>
        </Container>
    </>
    );
}

export { Cadastro }