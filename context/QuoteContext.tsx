"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

import { Product } from "@/data/products";


/*
 * Quote Item
 *
 * Product + Quantity
 */

export type QuoteItem = {
    product: Product;
    quantity: number;
};


/*
 * Context Type
 */

type QuoteContextType = {
    quoteItems: QuoteItem[];

    addToQuote: (product: Product) => void;

    removeFromQuote: (slug: string) => void;

    increaseQuantity: (slug: string) => void;

    decreaseQuantity: (slug: string) => void;

    isInQuote: (slug: string) => boolean;

    clearQuote: () => void;
};


const QuoteContext =
    createContext<QuoteContextType | undefined>(
        undefined
    );


const STORAGE_KEY = "ho2-quote-items";


/*
 * Provider
 */

export function QuoteProvider({
    children,
}: {
    children: ReactNode;
}) {

    const [quoteItems, setQuoteItems] =
        useState<QuoteItem[]>([]);

    const [isLoaded, setIsLoaded] =
        useState(false);


    /*
     * Load saved quote
     */

    useEffect(() => {

        try {

            const savedItems =
                localStorage.getItem(STORAGE_KEY);

            if (savedItems) {

                const parsedItems =
                    JSON.parse(savedItems);

                /*
                 * Support old format if necessary.
                 *
                 * If the old localStorage contained
                 * products directly, convert them to:
                 *
                 * {
                 *   product: product,
                 *   quantity: 1
                 * }
                 */

                if (Array.isArray(parsedItems)) {

                    const convertedItems =
                        parsedItems.map((item) => {

                            if (
                                item.product &&
                                typeof item.quantity === "number"
                            ) {
                                return item;
                            }

                            return {
                                product: item,
                                quantity: 1,
                            };

                        });

                    setQuoteItems(
                        convertedItems
                    );
                }
            }

        } catch (error) {

            console.error(
                "Failed to load quote items:",
                error
            );

        }

        setIsLoaded(true);

    }, []);


    /*
     * Save quote to localStorage
     */

    useEffect(() => {

        if (!isLoaded) return;

        try {

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(quoteItems)
            );

        } catch (error) {

            console.error(
                "Failed to save quote items:",
                error
            );

        }

    }, [quoteItems, isLoaded]);


    /*
     * Add Product
     */

    const addToQuote = (
        product: Product
    ) => {

        setQuoteItems((currentItems) => {

            const existingItem =
                currentItems.find(
                    (item) =>
                        item.product.slug ===
                        product.slug
                );


            /*
             * If product already exists,
             * increase quantity instead.
             */

            if (existingItem) {

                return currentItems.map(
                    (item) =>
                        item.product.slug ===
                            product.slug
                            ? {
                                ...item,
                                quantity:
                                    item.quantity + 1,
                            }
                            : item
                );

            }


            /*
             * New product
             */

            return [
                ...currentItems,

                {
                    product,
                    quantity: 1,
                },
            ];

        });

    };


    /*
     * Remove Product Completely
     */

    const removeFromQuote = (
        slug: string
    ) => {

        setQuoteItems((currentItems) =>
            currentItems.filter(
                (item) =>
                    item.product.slug !== slug
            )
        );

    };


    /*
     * Increase Quantity
     */

    const increaseQuantity = (
        slug: string
    ) => {

        setQuoteItems((currentItems) =>
            currentItems.map(
                (item) =>
                    item.product.slug === slug
                        ? {
                            ...item,
                            quantity:
                                item.quantity + 1,
                        }
                        : item
            )
        );

    };


    /*
     * Decrease Quantity
     */

    const decreaseQuantity = (
        slug: string
    ) => {

        setQuoteItems((currentItems) =>
            currentItems
                .map(
                    (item) =>
                        item.product.slug === slug
                            ? {
                                ...item,
                                quantity:
                                    item.quantity - 1,
                            }
                            : item
                )
                .filter(
                    (item) =>
                        item.quantity > 0
                )
        );

    };


    /*
     * Check Product
     */

    const isInQuote = (
        slug: string
    ) => {

        return quoteItems.some(
            (item) =>
                item.product.slug === slug
        );

    };


    /*
     * Clear Quote
     */

    const clearQuote = () => {

        setQuoteItems([]);

    };


    return (

        <QuoteContext.Provider
            value={{
                quoteItems,

                addToQuote,

                removeFromQuote,

                increaseQuantity,

                decreaseQuantity,

                isInQuote,

                clearQuote,
            }}
        >

            {children}

        </QuoteContext.Provider>

    );

}


/*
 * Hook
 */

export function useQuote() {

    const context =
        useContext(QuoteContext);


    if (!context) {

        throw new Error(
            "useQuote must be used inside QuoteProvider"
        );

    }


    return context;

}