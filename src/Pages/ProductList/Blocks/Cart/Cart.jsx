import React, { useState } from 'react';
import styled from 'styled-components';


export const Cart = () => {

    return (
        <Modal>
            <ModalDialog>
                <ModalHeader>
                    <ModalTitle>Корзина</ModalTitle>
                    <CloseButton>&times;</CloseButton>
                </ModalHeader>

                <ModalBody>

                    {/* <div class="food-row">
                        <span class="food-name">Ролл угорь стандарт</span>
                        <strong class="food-price">250 ₽</strong>
                        <div class="food-counter">
                            <button class="counter-button">-</button>
                            <span class="counter">1</span>
                            <button class="counter-button">+</button>
                        </div>
                    </div>

                    <div class="food-row">
                        <span class="food-name">Ролл угорь стандарт</span>
                        <strong class="food-price">250 ₽</strong>
                        <div class="food-counter">
                            <button class="counter-button">-</button>
                            <span class="counter">1</span>
                            <button class="counter-button">+</button>
                        </div>
                    </div>

                    <div class="food-row">
                        <span class="food-name">Ролл угорь стандарт</span>
                        <strong class="food-price">250 ₽</strong>
                        <div class="food-counter">
                            <button class="counter-button">-</button>
                            <span class="counter">1</span>
                            <button class="counter-button">+</button>
                        </div>
                    </div>

                    <div class="food-row">
                        <span class="food-name">Ролл угорь стандарт</span>
                        <strong class="food-price">250 ₽</strong>
                        <div class="food-counter">
                            <button class="counter-button">-</button>
                            <span class="counter">1</span>
                            <button class="counter-button">+</button>
                        </div>
                    </div> */}

                </ModalBody>

                <ModalFooter>
                    {/* <span class="modal-pricetag">1250 ₽</span>
                    <div class="footer-buttons">
                        <button class="button button-primary">Оформить заказ</button>
                        <button class="button clear-cart">Отмена</button>
                    </div> */}
                </ModalFooter>

            </ModalDialog>
        </Modal>

    )

}


const Modal = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    z-index: 999;
`


const ModalDialog = styled.div`
    max-width: 780px;
    width: 95%;
    background: #ffffff;
    border-radius: 5px;
    margin: auto;
    padding: 40px 45px;
`

const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 45px;
`

const ModalTitle = styled.h3`
    margin: 0;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
`

const CloseButton = styled.button`
    font-size: 36px;
    border: none;
    background-color: transparent;
`

const ModalBody = styled.div`
    margin-bottom: 22px;
`

const ModalFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`