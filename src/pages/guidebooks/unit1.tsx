import type { NextPage } from "next";
import { BottomBar } from "~/components/BottomBar";
import { LeftBar } from "~/components/LeftBar";
import {
    BronzeLeagueSvg,
    EditPencilSvg,
    EmptyFireSvg,
    FireSvg,
    LightningProgressSvg,
    EmptyMedalSvg,
    ProfileFriendsSvg,
    ProfileTimeJoinedSvg,
    SettingsGearSvg,
} from "~/components/Svgs";
import Link from "next/link";
import { Flag } from "~/components/Flag";
import { useBoundStore } from "~/hooks/useBoundStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import type { ComponentProps } from "react";
import React from "react";

import { RightBar } from "~/components/RightBar";
import { TopBar } from "~/components/TopBar";

import { Fragment, useCallback, useRef } from "react";
import {
    ActiveBookSvg,
    LockedBookSvg,
    CheckmarkSvg,
    LockedDumbbellSvg,
    FastForwardSvg,
    GoldenBookSvg,
    GoldenDumbbellSvg,
    GoldenTreasureSvg,
    GoldenTrophySvg,
    GuidebookSvg,
    LessonCompletionSvg0,
    LessonCompletionSvg1,
    LessonCompletionSvg2,
    LessonCompletionSvg3,
    LockSvg,
    StarSvg,
    LockedTreasureSvg,
    LockedTrophySvg,
    UpArrowSvg,
    ActiveTreasureSvg,
    ActiveTrophySvg,
    ActiveDumbbellSvg,
    PracticeExerciseSvg,
} from "~/components/Svgs";
import type { Unit } from "~/utils/units";
import { Companion } from "~/utils/guidebooks";
import { units } from "~/utils/units";
import { companions } from "~/utils/guidebooks";
import { TEMPORARY_REDIRECT_STATUS } from "next/dist/shared/lib/constants";

const UnitSection = ({ unit }: { unit: Unit }): JSX.Element => {
    const companionForCurrentUnit = companions.find((companion) => companion.unitNumber === 1);

    const router = useRouter();

    const [selectedTile, setSelectedTile] = useState<null | number>(null);

    useEffect(() => {
        const unselectTile = () => setSelectedTile(null);
        window.addEventListener("scroll", unselectTile);
        return () => window.removeEventListener("scroll", unselectTile);
    }, []);

    const closeTooltip = useCallback(() => setSelectedTile(null), []);

    const lessonsCompleted = useBoundStore((x) => x.lessonsCompleted);
    const increaseLessonsCompleted = useBoundStore(
        (x) => x.increaseLessonsCompleted
    );
    const increaseLingots = useBoundStore((x) => x.increaseLingots);

    return (
        <>
            <UnitHeader1
                unitNumber={unit.unitNumber}
                description={unit.description}
                backgroundColor={unit.backgroundColor}
                borderColor={unit.borderColor}
            />

            {/* ADD THE LEARNING OBJECTIVES IN THIS DIV */}

            <div className="relative mb-8 mt-[25px] flex max-w-2xl flex-col items-center gap-4">
                <LOSection term={companionForCurrentUnit} />
            </div>

            <UnitHeader2
                unitNumber={unit.unitNumber}
                description={unit.description}
                backgroundColor={unit.backgroundColor}
                borderColor={unit.borderColor}
            />

            {/* ADD THE KEY TERMS IN THIS DIV */}

            <div className="relative mb-8 mt-[25px] flex max-w-2xl flex-col gap-4">
                <KeyTermsSection term={companionForCurrentUnit} />
            </div>

            {/* ADD THE INSURANCE BASICS HEADER */}
            {/* ADD THE INSURANCE BASICS PARAGRAPH IN THIS DIV */}
            <div className="relative mb-8 mt-[25px] flex max-w-2xl flex-col gap-4">

            </div>

            {/* ADD THE POLICY ESSENTIALS HEADER */}
            {/* ADD THE POLICY ESSENTIALS PARAGRAPH IN THIS DIV */}
            <div className="relative mb-8 mt-[25px] flex max-w-2xl flex-col gap-4">

            </div>

            {/* ADD THE COMMON TYPES OF INSURANCE HEADER */}
            {/* ADD THE COMMON TYPES OF INSURANCE PARAGRAPH IN THIS DIV */}
            <div className="relative mb-8 mt-[25px] flex max-w-2xl flex-col gap-4">

            </div>
        </>
    );
};

const KeyTermsSection = ({ term }: { term: Companion }): JSX.Element => {
    return (
        <>
            {term.terms.map((keyTerm, index) => (
                <div key={index}>
                    <strong>{index + 1}. {keyTerm.key}:</strong> {keyTerm.definition}
                </div>
            ))}
        </>
    );
}

const LOSection = ({ term }: { term: Companion }): JSX.Element => {
    return (
        <>
            {term.objectives.map((keyTerm, index) => (
                <div key={index}>
                    <strong>{index + 1}. {keyTerm.key}:</strong> {keyTerm.obj}
                </div>
            ))}
        </>
    );
}

const Guidebook: NextPage = () => {

    return (
        <div>
            <TopBar />
            <LeftBar selectedTab="Learn" />
            <div className="flex justify-center gap-3 pt-14 sm:p-6 sm:pt-10 md:ml-24 lg:ml-64 lg:gap-12">
                <div className="px-4 pb-20">
                    <div className="py-7">
                        <div className="border-t-2 border-gray-300 py-5">
                            <h2 className="mb-5 text-4xl font-bold">Unit 1 Companion <br /></h2>
                            <p>This is your full handbook for everything on the basics of insurance. Take a look at anything you missed or need to review.</p>
                        </div>
                        <div className=" flex border-t-2 border-gray-300 py-5">
                            <section className="flex flex-col gap-3">
                                {
                                    units
                                        .filter((unit) => unit.unitNumber === 1)
                                        .map((unit) => (
                                            <UnitSection unit={unit} key={unit.unitNumber} />
                                        ))
                                }

                                {/* <div className="w-fit rounded-full bg-gray-200 px-3 py-1 text-sm font-bold uppercase text-gray-400">

                                </div> */}
                                {/* <button
                                    className="flex w-fit items-center gap-1 rounded-2xl border-2 border-gray-300 bg-white px-4 py-2 text-sm font-bold uppercase text-gray-300"
                                    disabled
                                >
                                </button> */}
                            </section>
                        </div>
                    </div>
                </div>
                <RightBar />
            </div>

            <BottomBar selectedTab="Learn" />
            <>
                <LeftBar selectedTab="Learn" />

                <div className="flex justify-center gap-3 pt-14 sm:p-6 sm:pt-10 md:ml-24 lg:ml-64 lg:gap-12">
                    <div className="flex max-w-2xl grow flex-col">
                        <div className="sticky bottom-28 left-0 right-0 flex items-end justify-between">
                            <Link
                                href="/lesson?practice"
                                className="absolute left-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-b-4 border-gray-200 bg-white transition hover:bg-gray-50 hover:brightness-90 md:left-0"
                            >
                                <span className="sr-only">Practice exercise</span>
                                <PracticeExerciseSvg className="h-8 w-8" />
                            </Link>
                            {/* {scrollY > 100 && (
                                <button
                                    className="absolute right-4 flex h-14 w-14 items-center justify-center self-end rounded-2xl border-2 border-b-4 border-gray-200 bg-white transition hover:bg-gray-50 hover:brightness-90 md:right-0"
                                    onClick={() => scrollTo(0, 0)}
                                >
                                    <span className="sr-only">Jump to top</span>
                                    <UpArrowSvg />
                                </button>
                            )} */}
                        </div>
                    </div>
                </div>

                <div className="pt-[90px]"></div>

                <BottomBar selectedTab="Learn" />
            </>
        </div>

    );
};
export default Guidebook;

const HoverLabel = ({
    text,
    textColor,
}: {
    text: string;
    textColor: `text-${string}`;
}) => {
    const hoverElement = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState(72);

    useEffect(() => {
        setWidth(hoverElement.current?.clientWidth ?? width);
    }, [hoverElement.current?.clientWidth, width]);

    return (
        <div
            className={`absolute z-10 w-max animate-bounce rounded-lg border-2 border-gray-200 bg-white px-3 py-2 font-bold uppercase ${textColor}`}
            style={{
                top: "-25%",
                left: `calc(50% - ${width / 2}px)`,
            }}
            ref={hoverElement}
        >
            {text}
            <div
                className="absolute h-3 w-3 rotate-45 border-b-2 border-r-2 border-gray-200 bg-white"
                style={{ left: "calc(50% - 8px)", bottom: "-8px" }}
            ></div>
        </div>
    );
};

const UnitHeader1 = ({
    backgroundColor,
}: {
    unitNumber: number;
    description: string;
    backgroundColor: `bg-${string}`;
    borderColor: `border-${string}`;
}) => {
    return (
        <article
            className={["max-w-2xl text-white sm:rounded-xl mt-[25px]", backgroundColor].join(
                " "
            )}
        >
            <header className="flex items-center justify-between gap-4 p-4">
                <div className="flex flex-col gap-1">
                    <h2 className="text-2xl font-bold">Learning Objectives</h2>
                </div>
            </header>
        </article>
    );
};

const UnitHeader2 = ({
    backgroundColor,
}: {
    unitNumber: number;
    description: string;
    backgroundColor: `bg-${string}`;
    borderColor: `border-${string}`;
}) => {
    return (
        <article
            className={["max-w-2xl text-white sm:rounded-xl mt-[25px]", backgroundColor].join(
                " "
            )}
        >
            <header className="flex items-center justify-between gap-4 p-4">
                <div className="flex flex-col gap-1">
                    <h2 className="text-2xl font-bold">Key Terms</h2>
                </div>
            </header>
        </article>
    );
};
