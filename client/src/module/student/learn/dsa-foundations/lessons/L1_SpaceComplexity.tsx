
i
m
p
o
r
t
 
{
 
u
s
e
M
e
m
o
,
 
u
s
e
S
t
a
t
e
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
B
o
o
k
O
p
e
n
,
 
C
o
d
e
2
,
 
L
i
g
h
t
b
u
l
b
,
 
P
l
a
y
,
 
T
a
r
g
e
t
 
}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{


 
 
L
e
s
s
o
n
S
h
e
l
l
,


 
 
t
y
p
e
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
,


 
 
t
y
p
e
 
L
e
s
s
o
n
T
a
b
D
e
f
,


}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
d
s
a
-
t
h
e
o
r
y
/
L
e
s
s
o
n
S
h
e
l
l
"
;


i
m
p
o
r
t
 
{


 
 
A
l
g
o
C
a
n
v
a
s
,


 
 
I
n
p
u
t
E
d
i
t
o
r
,


 
 
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
,


 
 
u
s
e
S
t
e
p
P
l
a
y
e
r
,


 
 
V
a
r
i
a
b
l
e
s
P
a
n
e
l
,


}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
d
s
a
-
t
h
e
o
r
y
/
a
l
g
o
"
;


i
m
p
o
r
t
 
{


 
 
C
a
l
l
o
u
t
,


 
 
C
a
r
d
,


 
 
L
e
d
e
,


 
 
P
i
l
l
B
u
t
t
o
n
,


 
 
S
e
c
t
i
o
n
E
y
e
b
r
o
w
,


 
 
S
e
c
t
i
o
n
T
i
t
l
e
,


 
 
S
u
b
H
e
a
d
i
n
g
,


 
 
T
H
E
M
E
,


}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
d
s
a
-
t
h
e
o
r
y
/
p
r
i
m
i
t
i
v
e
s
"
;


i
m
p
o
r
t
 
{
 
P
r
a
c
t
i
c
e
T
a
b
 
}
 
f
r
o
m
 
"
.
.
/
P
r
a
c
t
i
c
e
T
a
b
"
;




c
o
n
s
t
 
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
=
 
n
u
l
l
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
o
c
a
l
 
S
t
a
c
k
C
o
l
u
m
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
S
t
a
c
k
I
t
e
m
 
{


 
 
v
a
l
u
e
:
 
s
t
r
i
n
g
;


 
 
c
o
l
o
r
?
:
 
s
t
r
i
n
g
;


}




f
u
n
c
t
i
o
n
 
S
t
a
c
k
C
o
l
u
m
n
(
{


 
 
t
i
t
l
e
,


 
 
i
t
e
m
s
,


 
 
m
a
x
H
e
i
g
h
t
,


 
 
w
i
d
t
h
,


 
 
t
o
p
L
a
b
e
l
,


}
:
 
{


 
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
i
t
e
m
s
:
 
S
t
a
c
k
I
t
e
m
[
]
;


 
 
m
a
x
H
e
i
g
h
t
:
 
n
u
m
b
e
r
;


 
 
w
i
d
t
h
:
 
n
u
m
b
e
r
;


 
 
t
o
p
L
a
b
e
l
?
:
 
s
t
r
i
n
g
;


}
)
 
{


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
"
 
s
t
y
l
e
=
{
{
 
w
i
d
t
h
 
}
}
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
b
o
l
d
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
{
t
i
t
l
e
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
f
l
e
x
 
f
l
e
x
-
c
o
l
-
r
e
v
e
r
s
e
 
g
a
p
-
0
.
5
 
w
-
f
u
l
l
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
5
 
r
o
u
n
d
e
d
-
m
d
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
 
p
-
1
"


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
m
i
n
H
e
i
g
h
t
:
 
4
8
,
 
m
a
x
H
e
i
g
h
t
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
i
t
e
m
s
.
l
e
n
g
t
h
 
=
=
=
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
t
e
x
t
-
c
e
n
t
e
r
 
p
y
-
2
"
>
e
m
p
t
y
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
i
t
e
m
s
.
m
a
p
(
(
i
t
e
m
,
 
i
d
x
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
d
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
p
x
-
2
 
p
y
-
1
 
r
o
u
n
d
e
d
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
c
e
n
t
e
r
 
t
r
u
n
c
a
t
e
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
 
d
u
r
a
t
i
o
n
-
3
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
i
t
e
m
.
c
o
l
o
r
 
?
 
`
$
{
i
t
e
m
.
c
o
l
o
r
}
2
0
`
 
:
 
T
H
E
M
E
.
b
g
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
i
t
e
m
.
c
o
l
o
r
 
?
?
 
T
H
E
M
E
.
b
o
r
d
e
r
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
i
t
e
m
.
c
o
l
o
r
 
?
?
 
T
H
E
M
E
.
t
e
x
t
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
t
e
m
.
v
a
l
u
e
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
)


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
{
i
t
e
m
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
t
o
p
L
a
b
e
l
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
t
o
p
-
1
 
r
i
g
h
t
-
1
 
t
e
x
t
-
[
9
p
x
]
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
p
L
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
d
e
p
t
h
:
 
{
i
t
e
m
s
.
l
e
n
g
t
h
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
F
r
a
m
e
 
m
o
d
e
l
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
C
a
l
l
R
e
c
 
{
 
i
d
:
 
s
t
r
i
n
g
;
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;
 
r
e
t
?
:
 
n
u
m
b
e
r
;
 
}


i
n
t
e
r
f
a
c
e
 
F
r
a
m
e
 
{


 
 
l
i
n
e
:
 
n
u
m
b
e
r
;


 
 
v
a
r
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
 
|
 
n
u
m
b
e
r
 
|
 
u
n
d
e
f
i
n
e
d
>
;


 
 
m
e
s
s
a
g
e
:
 
s
t
r
i
n
g
;


 
 
s
t
a
c
k
:
 
C
a
l
l
R
e
c
[
]
;


 
 
m
a
x
D
e
p
t
h
:
 
n
u
m
b
e
r
;


 
 
r
e
s
u
l
t
?
:
 
n
u
m
b
e
r
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
R
e
c
u
r
s
i
v
e
 
f
a
c
t
o
r
i
a
l
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




c
o
n
s
t
 
P
S
E
U
D
O
_
R
E
C
_
F
A
C
T
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
f
a
c
t
(
n
)
:
"
,


 
 
"
 
 
i
f
 
n
 
<
=
 
1
:
"
,


 
 
"
 
 
 
 
r
e
t
u
r
n
 
1
"
,


 
 
"
 
 
r
e
t
u
r
n
 
n
 
*
 
f
a
c
t
(
n
 
-
 
1
)
"
,


]
;




f
u
n
c
t
i
o
n
 
b
u
i
l
d
R
e
c
F
a
c
t
(
n
0
:
 
n
u
m
b
e
r
)
:
 
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
f
:
 
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
s
t
a
c
k
:
 
C
a
l
l
R
e
c
[
]
 
=
 
[
]
;


 
 
l
e
t
 
m
a
x
D
e
p
t
h
 
=
 
0
;




 
 
c
o
n
s
t
 
e
n
t
e
r
 
=
 
(
n
:
 
n
u
m
b
e
r
,
 
l
i
n
e
:
 
n
u
m
b
e
r
,
 
m
s
g
:
 
s
t
r
i
n
g
)
 
=
>
 
{


 
 
 
 
s
t
a
c
k
.
p
u
s
h
(
{
 
i
d
:
 
`
f
a
c
t
(
$
{
n
}
)
`
,
 
l
a
b
e
l
:
 
`
f
a
c
t
(
$
{
n
}
)
`
 
}
)
;


 
 
 
 
m
a
x
D
e
p
t
h
 
=
 
M
a
t
h
.
m
a
x
(
m
a
x
D
e
p
t
h
,
 
s
t
a
c
k
.
l
e
n
g
t
h
)
;


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
,
 
v
a
r
s
:
 
{
 
n
,
 
d
e
p
t
h
:
 
s
t
a
c
k
.
l
e
n
g
t
h
 
}
,
 
m
e
s
s
a
g
e
:
 
m
s
g
,
 
s
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
m
a
x
D
e
p
t
h
 
}
)
;


 
 
}
;




 
 
c
o
n
s
t
 
e
x
i
t
 
=
 
(
n
:
 
n
u
m
b
e
r
,
 
r
e
t
:
 
n
u
m
b
e
r
,
 
l
i
n
e
:
 
n
u
m
b
e
r
,
 
m
s
g
:
 
s
t
r
i
n
g
)
 
=
>
 
{


 
 
 
 
s
t
a
c
k
[
s
t
a
c
k
.
l
e
n
g
t
h
 
-
 
1
]
 
=
 
{
 
.
.
.
s
t
a
c
k
[
s
t
a
c
k
.
l
e
n
g
t
h
 
-
 
1
]
,
 
r
e
t
 
}
;


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
,
 
v
a
r
s
:
 
{
 
n
,
 
"
r
e
t
u
r
n
s
"
:
 
r
e
t
,
 
d
e
p
t
h
:
 
s
t
a
c
k
.
l
e
n
g
t
h
 
}
,
 
m
e
s
s
a
g
e
:
 
m
s
g
,
 
s
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
m
a
x
D
e
p
t
h
 
}
)
;


 
 
 
 
s
t
a
c
k
.
p
o
p
(
)
;


 
 
}
;




 
 
f
u
n
c
t
i
o
n
 
g
o
(
n
:
 
n
u
m
b
e
r
)
:
 
n
u
m
b
e
r
 
{


 
 
 
 
e
n
t
e
r
(
n
,
 
0
,
 
`
C
a
l
l
 
f
a
c
t
(
$
{
n
}
)
,
 
p
u
s
h
 
a
 
n
e
w
 
s
t
a
c
k
 
f
r
a
m
e
.
`
)
;


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
n
,
 
d
e
p
t
h
:
 
s
t
a
c
k
.
l
e
n
g
t
h
 
}
,
 
m
e
s
s
a
g
e
:
 
`
C
h
e
c
k
 
b
a
s
e
 
c
a
s
e
:
 
i
s
 
$
{
n
}
 
≤
 
1
?
`
,
 
s
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
m
a
x
D
e
p
t
h
 
}
)
;


 
 
 
 
i
f
 
(
n
 
<
=
 
1
)
 
{


 
 
 
 
 
 
e
x
i
t
(
n
,
 
1
,
 
2
,
 
`
B
a
s
e
 
c
a
s
e
 
h
i
t
.
 
f
a
c
t
(
$
{
n
}
)
 
=
 
1
.
 
P
o
p
 
f
r
a
m
e
.
`
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
1
;


 
 
 
 
}


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
3
,
 
v
a
r
s
:
 
{
 
n
,
 
d
e
p
t
h
:
 
s
t
a
c
k
.
l
e
n
g
t
h
 
}
,
 
m
e
s
s
a
g
e
:
 
`
R
e
c
u
r
s
e
:
 
n
e
e
d
 
f
a
c
t
(
$
{
n
 
-
 
1
}
)
 
b
e
f
o
r
e
 
m
u
l
t
i
p
l
y
i
n
g
.
`
,
 
s
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
m
a
x
D
e
p
t
h
 
}
)
;


 
 
 
 
c
o
n
s
t
 
s
u
b
 
=
 
g
o
(
n
 
-
 
1
)
;


 
 
 
 
c
o
n
s
t
 
r
 
=
 
n
 
*
 
s
u
b
;


 
 
 
 
e
x
i
t
(
n
,
 
r
,
 
3
,
 
`
f
a
c
t
(
$
{
n
}
)
 
=
 
$
{
n
}
 
×
 
$
{
s
u
b
}
 
=
 
$
{
r
}
.
 
P
o
p
 
f
r
a
m
e
.
`
)
;


 
 
 
 
r
e
t
u
r
n
 
r
;


 
 
}




 
 
c
o
n
s
t
 
f
i
n
a
l
A
n
s
w
e
r
 
=
 
g
o
(
n
0
)
;


 
 
f
.
p
u
s
h
(
{


 
 
 
 
l
i
n
e
:
 
3
,
 
v
a
r
s
:
 
{
 
n
:
 
n
0
,
 
r
e
s
u
l
t
:
 
f
i
n
a
l
A
n
s
w
e
r
,
 
"
m
a
x
 
d
e
p
t
h
"
:
 
m
a
x
D
e
p
t
h
 
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
D
o
n
e
.
 
P
e
a
k
 
s
t
a
c
k
 
d
e
p
t
h
 
w
a
s
 
$
{
m
a
x
D
e
p
t
h
}
,
 
t
h
a
t
 
i
s
 
t
h
e
 
a
u
x
i
l
i
a
r
y
 
s
p
a
c
e
 
O
(
n
)
.
`
,


 
 
 
 
s
t
a
c
k
:
 
[
]
,
 
m
a
x
D
e
p
t
h
,
 
r
e
s
u
l
t
:
 
f
i
n
a
l
A
n
s
w
e
r
,


 
 
}
)
;


 
 
r
e
t
u
r
n
 
f
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
I
t
e
r
a
t
i
v
e
 
f
a
c
t
o
r
i
a
l
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




c
o
n
s
t
 
P
S
E
U
D
O
_
I
T
E
R
_
F
A
C
T
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
f
a
c
t
(
n
)
:
"
,


 
 
"
 
 
r
e
s
u
l
t
 
←
 
1
"
,


 
 
"
 
 
f
o
r
 
i
 
i
n
 
2
.
.
n
:
"
,


 
 
"
 
 
 
 
r
e
s
u
l
t
 
←
 
r
e
s
u
l
t
 
*
 
i
"
,


 
 
"
 
 
r
e
t
u
r
n
 
r
e
s
u
l
t
"
,


]
;




f
u
n
c
t
i
o
n
 
b
u
i
l
d
I
t
e
r
F
a
c
t
(
n
0
:
 
n
u
m
b
e
r
)
:
 
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
f
:
 
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
s
t
a
c
k
:
 
C
a
l
l
R
e
c
[
]
 
=
 
[
{
 
i
d
:
 
"
m
a
i
n
"
,
 
l
a
b
e
l
:
 
"
m
a
i
n
(
)
"
 
}
]
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
n
:
 
n
0
 
}
,
 
m
e
s
s
a
g
e
:
 
`
C
a
l
l
 
f
a
c
t
(
$
{
n
0
}
)
,
 
s
i
n
g
l
e
 
f
r
a
m
e
 
o
n
 
t
h
e
 
s
t
a
c
k
.
`
,
 
s
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
m
a
x
D
e
p
t
h
:
 
1
 
}
)
;


 
 
l
e
t
 
r
e
s
u
l
t
 
=
 
1
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
n
:
 
n
0
,
 
r
e
s
u
l
t
 
}
,
 
m
e
s
s
a
g
e
:
 
`
I
n
i
t
i
a
l
i
s
e
 
r
e
s
u
l
t
 
=
 
1
.
`
,
 
s
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
m
a
x
D
e
p
t
h
:
 
1
 
}
)
;


 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
2
;
 
i
 
<
=
 
n
0
;
 
i
+
+
)
 
{


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
2
,
 
v
a
r
s
:
 
{
 
n
:
 
n
0
,
 
i
,
 
r
e
s
u
l
t
 
}
,
 
m
e
s
s
a
g
e
:
 
`
L
o
o
p
 
h
e
a
d
:
 
i
 
=
 
$
{
i
}
.
`
,
 
s
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
m
a
x
D
e
p
t
h
:
 
1
 
}
)
;


 
 
 
 
r
e
s
u
l
t
 
=
 
r
e
s
u
l
t
 
*
 
i
;


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
3
,
 
v
a
r
s
:
 
{
 
n
:
 
n
0
,
 
i
,
 
r
e
s
u
l
t
 
}
,
 
m
e
s
s
a
g
e
:
 
`
r
e
s
u
l
t
 
←
 
r
e
s
u
l
t
 
×
 
$
{
i
}
 
=
 
$
{
r
e
s
u
l
t
}
.
`
,
 
s
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
m
a
x
D
e
p
t
h
:
 
1
 
}
)
;


 
 
}


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
4
,
 
v
a
r
s
:
 
{
 
n
:
 
n
0
,
 
r
e
s
u
l
t
 
}
,
 
m
e
s
s
a
g
e
:
 
`
R
e
t
u
r
n
 
$
{
r
e
s
u
l
t
}
.
 
S
t
a
c
k
 
n
e
v
e
r
 
g
r
e
w
 
p
a
s
t
 
1
 
f
r
a
m
e
 
→
 
O
(
1
)
 
a
u
x
i
l
i
a
r
y
 
s
p
a
c
e
.
`
,
 
s
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
m
a
x
D
e
p
t
h
:
 
1
,
 
r
e
s
u
l
t
 
}
)
;


 
 
r
e
t
u
r
n
 
f
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
V
i
s
u
a
l
i
z
e
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




t
y
p
e
 
M
o
d
e
 
=
 
"
r
e
c
"
 
|
 
"
i
t
e
r
"
;




f
u
n
c
t
i
o
n
 
V
i
s
u
a
l
i
z
e
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
[
m
o
d
e
,
 
s
e
t
M
o
d
e
]
 
=
 
u
s
e
S
t
a
t
e
<
M
o
d
e
>
(
"
r
e
c
"
)
;


 
 
c
o
n
s
t
 
[
n
,
 
s
e
t
N
]
 
=
 
u
s
e
S
t
a
t
e
(
5
)
;


 
 
c
o
n
s
t
 
[
i
n
p
u
t
S
t
r
,
 
s
e
t
I
n
p
u
t
S
t
r
]
 
=
 
u
s
e
S
t
a
t
e
(
"
5
"
)
;




 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
=
 
u
s
e
M
e
m
o
(


 
 
 
 
(
)
 
=
>
 
(
m
o
d
e
 
=
=
=
 
"
r
e
c
"
 
?
 
b
u
i
l
d
R
e
c
F
a
c
t
(
n
)
 
:
 
b
u
i
l
d
I
t
e
r
F
a
c
t
(
n
)
)
,


 
 
 
 
[
m
o
d
e
,
 
n
]
,


 
 
)
;


 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;




 
 
c
o
n
s
t
 
i
s
R
e
c
 
=
 
m
o
d
e
 
=
=
=
 
"
r
e
c
"
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
{
`
F
a
c
t
o
r
i
a
l
,
 
$
{
i
s
R
e
c
 
?
 
"
R
e
c
u
r
s
i
v
e
"
 
:
 
"
I
t
e
r
a
t
i
v
e
"
}
`
}


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
I
n
p
u
t
 
n
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
i
n
p
u
t
S
t
r
}


 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
e
.
g
.
 
5
"


 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
W
e
 
t
r
a
c
e
 
f
a
c
t
(
n
)
.
 
T
r
y
 
b
o
t
h
 
m
o
d
e
s
 
a
n
d
 
c
o
m
p
a
r
e
 
t
h
e
 
s
t
a
c
k
 
h
e
i
g
h
t
.
"


 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
n
 
=
 
1
"
,
 
v
a
l
u
e
:
 
"
1
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
n
 
=
 
3
"
,
 
v
a
l
u
e
:
 
"
3
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
n
 
=
 
5
"
,
 
v
a
l
u
e
:
 
"
5
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
n
 
=
 
8
"
,
 
v
a
l
u
e
:
 
"
8
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
(
v
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
 
=
 
M
a
t
h
.
m
a
x
(
1
,
 
M
a
t
h
.
m
i
n
(
1
0
,
 
M
a
t
h
.
f
l
o
o
r
(
N
u
m
b
e
r
(
v
)
 
|
|
 
0
)
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
x
 
>
 
0
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
I
n
p
u
t
S
t
r
(
S
t
r
i
n
g
(
x
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
N
(
x
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
R
a
n
d
o
m
=
{
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
 
=
 
1
 
+
 
M
a
t
h
.
f
l
o
o
r
(
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
8
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
I
n
p
u
t
S
t
r
(
S
t
r
i
n
g
(
x
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
N
(
x
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
m
o
d
e


 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
(
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
r
e
c
"
,
 
"
R
e
c
u
r
s
i
v
e
,
 
O
(
n
)
 
s
t
a
c
k
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
i
t
e
r
"
,
 
"
I
t
e
r
a
t
i
v
e
,
 
O
(
1
)
 
s
t
a
c
k
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
]
 
a
s
 
c
o
n
s
t
)
.
m
a
p
(
(
[
i
d
,
 
l
a
b
e
l
]
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
B
u
t
t
o
n
 
k
e
y
=
{
i
d
}
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
M
o
d
e
(
i
d
)
}
 
a
c
t
i
v
e
=
{
m
o
d
e
 
=
=
=
 
i
d
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
"
>
{
l
a
b
e
l
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
i
l
l
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
i
s
R
e
c
 
?
 
P
S
E
U
D
O
_
R
E
C
_
F
A
C
T
 
:
 
P
S
E
U
D
O
_
I
T
E
R
_
F
A
C
T
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
f
l
a
s
h
K
e
y
s
=
{
[
"
d
e
p
t
h
"
,
 
"
r
e
s
u
l
t
"
,
 
"
i
"
]
}
 
/
>
}


 
 
 
 
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
[
1
f
r
_
a
u
t
o
]
 
g
a
p
-
6
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
i
t
e
m
s
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
3
 
w
-
f
u
l
l
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
b
o
l
d
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
A
u
x
i
l
i
a
r
y
 
s
p
a
c
e


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
4
 
p
y
-
2
.
5
 
r
o
u
n
d
e
d
-
m
d
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
l
g
 
f
o
n
t
-
e
x
t
r
a
b
o
l
d
"


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
i
s
R
e
c
 
?
 
`
$
{
T
H
E
M
E
.
d
a
n
g
e
r
}
1
4
`
 
:
 
`
$
{
T
H
E
M
E
.
s
u
c
c
e
s
s
}
1
4
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
2
p
x
 
s
o
l
i
d
 
$
{
i
s
R
e
c
 
?
 
T
H
E
M
E
.
d
a
n
g
e
r
 
:
 
T
H
E
M
E
.
s
u
c
c
e
s
s
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
i
s
R
e
c
 
?
 
T
H
E
M
E
.
d
a
n
g
e
r
D
a
r
k
 
:
 
T
H
E
M
E
.
s
u
c
c
e
s
s
D
a
r
k
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
R
e
c
 
?
 
"
O
(
n
)
,
 
g
r
o
w
s
 
w
i
t
h
 
i
n
p
u
t
"
 
:
 
"
O
(
1
)
,
 
s
i
n
g
l
e
 
f
r
a
m
e
"
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
t
e
x
t
-
c
e
n
t
e
r
 
m
a
x
-
w
-
x
s
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
P
e
a
k
 
s
t
a
c
k
 
f
r
a
m
e
s
 
d
u
r
i
n
g
 
t
h
i
s
 
t
r
a
c
e
:
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>
{
f
r
a
m
e
?
.
m
a
x
D
e
p
t
h
}
<
/
s
t
r
o
n
g
>


 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
"
>
{
f
r
a
m
e
?
.
m
e
s
s
a
g
e
 
?
?
 
"
P
r
e
s
s
 
p
l
a
y
 
t
o
 
s
t
a
r
t
.
"
}
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
o
v
e
r
f
l
o
w
-
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
c
k
C
o
l
u
m
n


 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
C
a
l
l
 
S
t
a
c
k
"


 
 
 
 
 
 
 
 
 
 
 
 
i
t
e
m
s
=
{
(
f
r
a
m
e
?
.
s
t
a
c
k
 
?
?
 
[
]
)
.
m
a
p
(
(
s
)
 
=
>
 
(
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
:
 
s
.
r
e
t
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
?
 
`
$
{
s
.
l
a
b
e
l
}
 
↩
 
$
{
s
.
r
e
t
}
`
 
:
 
s
.
l
a
b
e
l
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
s
.
r
e
t
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
?
 
T
H
E
M
E
.
s
u
c
c
e
s
s
 
:
 
u
n
d
e
f
i
n
e
d
,


 
 
 
 
 
 
 
 
 
 
 
 
}
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
m
a
x
H
e
i
g
h
t
=
{
3
0
0
}


 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
1
5
0
}


 
 
 
 
 
 
 
 
 
 
 
 
t
o
p
L
a
b
e
l
=
"
t
o
p
"


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
e
a
r
n
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
L
e
a
r
n
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
c
a
r
d
s
 
=
 
[


 
 
 
 
{
 
t
:
 
"
V
a
r
i
a
b
l
e
s
 
a
r
e
 
O
(
1
)
"
,
 
b
:
 
"
A
 
f
i
x
e
d
 
n
u
m
b
e
r
 
o
f
 
s
c
a
l
a
r
s
 
(
c
o
u
n
t
e
r
s
,
 
a
c
c
u
m
u
l
a
t
o
r
s
)
 
u
s
e
s
 
c
o
n
s
t
a
n
t
 
m
e
m
o
r
y
 
n
o
 
m
a
t
t
e
r
 
h
o
w
 
b
i
g
 
n
 
i
s
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
N
e
w
 
a
r
r
a
y
s
 
a
r
e
 
O
(
s
i
z
e
)
"
,
 
b
:
 
"
I
f
 
y
o
u
 
a
l
l
o
c
a
t
e
 
a
 
h
e
l
p
e
r
 
a
r
r
a
y
 
o
f
 
l
e
n
g
t
h
 
n
,
 
y
o
u
 
j
u
s
t
 
a
d
d
e
d
 
O
(
n
)
 
s
p
a
c
e
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
R
e
c
u
r
s
i
o
n
 
c
o
s
t
s
 
s
t
a
c
k
 
f
r
a
m
e
s
"
,
 
b
:
 
"
E
a
c
h
 
u
n
r
e
s
o
l
v
e
d
 
r
e
c
u
r
s
i
v
e
 
c
a
l
l
 
k
e
e
p
s
 
i
t
s
 
l
o
c
a
l
s
 
a
l
i
v
e
 
o
n
 
t
h
e
 
c
a
l
l
 
s
t
a
c
k
.
 
D
e
p
t
h
 
d
 
→
 
O
(
d
)
 
s
p
a
c
e
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
D
a
t
a
 
s
t
r
u
c
t
u
r
e
s
 
c
o
u
n
t
"
,
 
b
:
 
"
H
a
s
h
 
m
a
p
s
,
 
s
e
t
s
,
 
m
a
t
r
i
c
e
s
,
 
t
h
e
i
r
 
s
i
z
e
s
 
a
l
l
 
f
e
e
d
 
i
n
t
o
 
a
u
x
i
l
i
a
r
y
 
s
p
a
c
e
.
"
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
5
"
>


 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>
s
p
a
c
e
 
c
o
m
p
l
e
x
i
t
y
<
/
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
T
i
t
l
e
>
H
o
w
 
m
u
c
h
 
m
e
m
o
r
y
 
d
o
e
s
 
t
h
e
 
a
l
g
o
r
i
t
h
m
 
n
e
e
d
?
<
/
S
e
c
t
i
o
n
T
i
t
l
e
>


 
 
 
 
 
 
 
 
<
L
e
d
e
>


 
 
 
 
 
 
 
 
 
 
T
h
e
 
t
o
t
a
l
 
m
e
m
o
r
y
 
a
n
 
a
l
g
o
r
i
t
h
m
 
u
s
e
s
 
a
s
 
a
 
f
u
n
c
t
i
o
n
 
o
f
 
t
h
e
 
i
n
p
u
t
 
s
i
z
e
 
n
.
 
W
e
 
s
p
l
i
t
 
i
t
 
i
n
t
o
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>
i
n
p
u
t
 
s
p
a
c
e
<
/
s
t
r
o
n
g
>
 
(
t
h
e
 
g
i
v
e
n


 
 
 
 
 
 
 
 
 
 
d
a
t
a
)
 
a
n
d
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>
a
u
x
i
l
i
a
r
y
 
s
p
a
c
e
<
/
s
t
r
o
n
g
>
 
(
a
n
y
t
h
i
n
g


 
 
 
 
 
 
 
 
 
 
e
x
t
r
a
 
t
h
e
 
a
l
g
o
r
i
t
h
m
 
a
l
l
o
c
a
t
e
s
)
.
 
I
n
t
e
r
v
i
e
w
s
 
c
a
r
e
 
a
b
o
u
t
 
a
u
x
i
l
i
a
r
y
 
s
p
a
c
e
.


 
 
 
 
 
 
 
 
<
/
L
e
d
e
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
s
m
:
g
r
i
d
-
c
o
l
s
-
2
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
{
c
a
r
d
s
.
m
a
p
(
(
c
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
{
c
.
t
}
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>
{
c
.
b
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
<
C
a
r
d
 
p
a
d
d
e
d
=
{
f
a
l
s
e
}
 
c
l
a
s
s
N
a
m
e
=
"
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"
>


 
 
 
 
 
 
 
 
<
t
a
b
l
e
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
t
e
x
t
-
s
m
"
>


 
 
 
 
 
 
 
 
 
 
<
t
h
e
a
d
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
/
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
[
"
A
l
g
o
r
i
t
h
m
"
,
 
"
A
u
x
i
l
i
a
r
y
 
s
p
a
c
e
"
]
.
m
a
p
(
(
h
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
h
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
l
e
f
t
 
p
x
-
4
 
p
y
-
3
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
<
/
t
h
e
a
d
>


 
 
 
 
 
 
 
 
 
 
<
t
b
o
d
y
>


 
 
 
 
 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
I
t
e
r
a
t
i
v
e
 
f
a
c
t
o
r
i
a
l
 
/
 
F
i
b
o
n
a
c
c
i
"
,
 
"
O
(
1
)
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
R
e
c
u
r
s
i
v
e
 
f
a
c
t
o
r
i
a
l
 
/
 
F
i
b
o
n
a
c
c
i
 
(
n
o
 
m
e
m
o
)
"
,
 
"
O
(
n
)
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
M
e
r
g
e
 
s
o
r
t
 
a
u
x
i
l
i
a
r
y
 
a
r
r
a
y
"
,
 
"
O
(
n
)
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
Q
u
i
c
k
 
s
o
r
t
 
(
i
n
-
p
l
a
c
e
)
"
,
 
"
O
(
l
o
g
 
n
)
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
B
F
S
 
o
n
 
a
 
g
r
a
p
h
 
(
q
u
e
u
e
)
"
,
 
"
O
(
V
)
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
[
w
h
a
t
,
 
b
i
g
]
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
 
k
e
y
=
{
i
}
 
c
l
a
s
s
N
a
m
e
=
{
i
 
=
=
=
 
0
 
?
 
"
"
 
:
 
"
b
o
r
d
e
r
-
t
 
b
o
r
d
e
r
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
5
"
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
4
 
p
y
-
2
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>
{
w
h
a
t
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
4
 
p
y
-
2
 
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
l
i
m
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
4
0
0
"
>
{
b
i
g
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
t
b
o
d
y
>


 
 
 
 
 
 
 
 
<
/
t
a
b
l
e
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
T
r
y
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
T
r
y
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
p
r
o
b
l
e
m
s
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
s
n
i
p
p
e
t
:
 
"
f
o
r
 
i
 
i
n
 
0
.
.
n
:
\
n
 
 
s
u
m
 
+
=
 
a
[
i
]
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
O
(
1
)
"
,
 
"
O
(
n
)
"
,
 
"
O
(
n
²
)
"
]
,


 
 
 
 
 
 
a
n
s
w
e
r
:
 
0
,


 
 
 
 
 
 
e
x
p
l
a
i
n
:
 
"
A
 
s
i
n
g
l
e
 
a
c
c
u
m
u
l
a
t
o
r
 
s
u
m
 
i
s
 
o
n
e
 
s
c
a
l
a
r
,
 
c
o
n
s
t
a
n
t
 
a
u
x
i
l
i
a
r
y
 
s
p
a
c
e
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
s
n
i
p
p
e
t
:
 
"
c
o
p
y
 
←
 
n
e
w
 
a
r
r
a
y
 
o
f
 
s
i
z
e
 
n
\
n
f
o
r
 
i
 
i
n
 
0
.
.
n
:
\
n
 
 
c
o
p
y
[
i
]
 
←
 
a
[
i
]
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
O
(
1
)
"
,
 
"
O
(
l
o
g
 
n
)
"
,
 
"
O
(
n
)
"
]
,


 
 
 
 
 
 
a
n
s
w
e
r
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
i
n
:
 
"
A
l
l
o
c
a
t
i
n
g
 
a
 
f
r
e
s
h
 
s
i
z
e
-
n
 
a
r
r
a
y
 
a
d
d
s
 
O
(
n
)
 
a
u
x
i
l
i
a
r
y
 
s
p
a
c
e
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
s
n
i
p
p
e
t
:
 
"
f
u
n
c
t
i
o
n
 
f
(
n
)
:
\
n
 
 
i
f
 
n
 
=
=
 
0
:
 
r
e
t
u
r
n
 
0
\
n
 
 
r
e
t
u
r
n
 
f
(
n
-
1
)
 
+
 
1
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
O
(
1
)
"
,
 
"
O
(
n
)
"
,
 
"
O
(
l
o
g
 
n
)
"
]
,


 
 
 
 
 
 
a
n
s
w
e
r
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
i
n
:
 
"
R
e
c
u
r
s
i
o
n
 
d
e
p
t
h
 
i
s
 
n
 
→
 
n
 
s
t
a
c
k
 
f
r
a
m
e
s
 
a
l
i
v
e
 
a
t
 
o
n
c
e
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
s
n
i
p
p
e
t
:
 
"
f
u
n
c
t
i
o
n
 
b
s
(
a
,
 
l
o
,
 
h
i
,
 
x
)
:
\
n
 
 
i
f
 
l
o
 
>
 
h
i
:
 
r
e
t
u
r
n
 
-
1
\
n
 
 
m
i
d
 
←
 
(
l
o
 
+
 
h
i
)
 
/
 
2
\
n
 
 
.
.
.
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
O
(
1
)
"
,
 
"
O
(
l
o
g
 
n
)
"
,
 
"
O
(
n
)
"
]
,


 
 
 
 
 
 
a
n
s
w
e
r
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
i
n
:
 
"
B
i
n
a
r
y
 
s
e
a
r
c
h
 
r
e
c
u
r
s
i
o
n
 
h
a
l
v
e
s
 
e
a
c
h
 
c
a
l
l
 
→
 
s
t
a
c
k
 
d
e
p
t
h
 
l
o
g
₂
 
n
.
"
,


 
 
 
 
}
,


 
 
]
;


 
 
c
o
n
s
t
 
[
p
i
c
k
e
d
,
 
s
e
t
P
i
c
k
e
d
]
 
=
 
u
s
e
S
t
a
t
e
<
(
n
u
m
b
e
r
 
|
 
n
u
l
l
)
[
]
>
(
p
r
o
b
l
e
m
s
.
m
a
p
(
(
)
 
=
>
 
n
u
l
l
)
)
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
<
C
a
l
l
o
u
t
>


 
 
 
 
 
 
 
 
P
i
c
k
 
t
h
e
 
a
u
x
i
l
i
a
r
y
 
s
p
a
c
e
 
f
o
r
 
e
a
c
h
 
s
n
i
p
p
e
t
.
 
I
n
p
u
t
 
a
r
r
a
y
s
 
d
o
 
n
o
t
 
c
o
u
n
t
,
 
o
n
l
y
 
n
e
w


 
 
 
 
 
 
 
 
a
l
l
o
c
a
t
i
o
n
s
 
a
n
d
 
s
t
a
c
k
 
f
r
a
m
e
s
.


 
 
 
 
 
 
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
{
p
r
o
b
l
e
m
s
.
m
a
p
(
(
p
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
e
l
 
=
 
p
i
c
k
e
d
[
i
]
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
r
e
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
s
t
o
n
e
-
9
5
0
 
d
a
r
k
:
b
g
-
b
l
a
c
k
 
t
e
x
t
-
s
t
o
n
e
-
1
0
0
 
p
x
-
4
 
p
y
-
3
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
o
v
e
r
f
l
o
w
-
x
-
a
u
t
o
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
8
0
0
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
s
n
i
p
p
e
t
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
r
e
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
o
p
t
i
o
n
s
.
m
a
p
(
(
o
,
 
i
d
x
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
r
r
e
c
t
 
=
 
s
e
l
 
!
=
=
 
n
u
l
l
 
&
&
 
i
d
x
 
=
=
=
 
p
.
a
n
s
w
e
r
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
w
r
o
n
g
 
=
 
s
e
l
 
!
=
=
 
n
u
l
l
 
&
&
 
i
d
x
 
=
=
=
 
s
e
l
 
&
&
 
i
d
x
 
!
=
=
 
p
.
a
n
s
w
e
r
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
d
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
p
i
c
k
e
d
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
[
i
]
 
=
 
i
d
x
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
P
i
c
k
e
d
(
v
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
p
x
-
3
 
p
y
-
1
.
5
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
b
o
l
d
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
b
o
r
d
e
r
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
r
r
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
l
i
m
e
-
5
0
0
 
b
g
-
l
i
m
e
-
5
0
 
d
a
r
k
:
b
g
-
l
i
m
e
-
4
0
0
/
1
0
 
t
e
x
t
-
l
i
m
e
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
2
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
w
r
o
n
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
r
o
s
e
-
5
0
0
 
b
g
-
r
o
s
e
-
5
0
 
d
a
r
k
:
b
g
-
r
o
s
e
-
5
0
0
/
1
0
 
t
e
x
t
-
r
o
s
e
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
r
o
s
e
-
2
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
3
0
0
 
h
o
v
e
r
:
b
o
r
d
e
r
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
w
h
i
t
e
/
3
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
l
 
!
=
=
 
n
u
l
l
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
{
p
.
e
x
p
l
a
i
n
}
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
I
n
s
i
g
h
t
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
I
n
s
i
g
h
t
T
a
b
(
)
 
{


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
4
"
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
T
i
m
e
 
v
s
 
S
p
a
c
e
 
t
r
a
d
e
-
o
f
f
s
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
Y
o
u
 
c
a
n
 
a
l
m
o
s
t
 
a
l
w
a
y
s
 
t
r
a
d
e
 
o
n
e
 
f
o
r
 
t
h
e
 
o
t
h
e
r
.
 
M
e
m
o
i
s
a
t
i
o
n
 
t
u
r
n
s
 
e
x
p
o
n
e
n
t
i
a
l
-
t
i
m
e


 
 
 
 
 
 
 
 
 
 
r
e
c
u
r
s
i
o
n
 
i
n
t
o
 
l
i
n
e
a
r
 
t
i
m
e
 
b
y
 
s
p
e
n
d
i
n
g
 
O
(
n
)
 
e
x
t
r
a
 
s
p
a
c
e
.
 
I
n
t
e
r
v
i
e
w
e
r
s
 
l
o
v
e
 
t
h
i
s
 
p
a
t
t
e
r
n
;


 
 
 
 
 
 
 
 
 
 
i
t
 
s
h
o
w
s
 
u
p
 
i
n
 
D
P
,
 
h
a
s
h
i
n
g
,
 
a
n
d
 
c
a
c
h
i
n
g
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
T
a
i
l
 
r
e
c
u
r
s
i
o
n
 
c
a
v
e
a
t
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
S
o
m
e
 
l
a
n
g
u
a
g
e
s
 
(
S
c
h
e
m
e
,
 
S
c
a
l
a
)
 
o
p
t
i
m
i
s
e
 
t
a
i
l
 
c
a
l
l
s
 
t
o
 
O
(
1
)
 
s
p
a
c
e
.
 
M
a
i
n
s
t
r
e
a
m
 
P
y
t
h
o
n
,


 
 
 
 
 
 
 
 
 
 
J
a
v
a
,
 
a
n
d
 
C
+
+
 
d
o
 
<
e
m
>
n
o
t
<
/
e
m
>
.
 
I
n
 
i
n
t
e
r
v
i
e
w
s
,
 
a
s
s
u
m
e
 
e
a
c
h
 
r
e
c
u
r
s
i
v
e
 
c
a
l
l
 
c
o
s
t
s
 
a
 
f
r
a
m
e
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
I
n
t
e
r
v
i
e
w
-
s
t
y
l
e
 
c
h
e
c
k
l
i
s
t
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
o
l
 
c
l
a
s
s
N
a
m
e
=
"
l
i
s
t
-
d
e
c
i
m
a
l
 
p
l
-
5
 
s
p
a
c
e
-
y
-
1
.
5
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
C
o
u
n
t
 
a
l
l
 
<
e
m
>
n
e
w
<
/
e
m
>
 
d
a
t
a
 
s
t
r
u
c
t
u
r
e
s
 
a
n
d
 
m
u
l
t
i
p
l
y
 
t
h
e
i
r
 
s
i
z
e
s
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
M
e
a
s
u
r
e
 
r
e
c
u
r
s
i
o
n
 
d
e
p
t
h
.
 
E
a
c
h
 
l
e
v
e
l
 
=
 
1
 
f
r
a
m
e
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
A
d
d
 
e
v
e
r
y
t
h
i
n
g
;
 
d
r
o
p
 
c
o
n
s
t
a
n
t
s
 
a
n
d
 
l
o
w
e
r
-
o
r
d
e
r
 
t
e
r
m
s
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
S
t
a
t
e
 
w
h
e
t
h
e
r
 
y
o
u
 
a
r
e
 
r
e
p
o
r
t
i
n
g
 
i
n
p
u
t
 
+
 
a
u
x
i
l
i
a
r
y
,
 
o
r
 
j
u
s
t
 
a
u
x
i
l
i
a
r
y
.
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
o
l
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
P
r
o
p
s
 
{


 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
:
 
n
u
m
b
e
r
)
 
=
>
 
v
o
i
d
;


}




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
L
1
_
S
p
a
c
e
C
o
m
p
l
e
x
i
t
y
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
t
a
b
s
:
 
L
e
s
s
o
n
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
l
e
a
r
n
"
,
 
l
a
b
e
l
:
 
"
L
e
a
r
n
"
,
 
i
c
o
n
:
 
<
B
o
o
k
O
p
e
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
L
e
a
r
n
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
v
i
s
u
a
l
i
z
e
"
,
 
l
a
b
e
l
:
 
"
V
i
s
u
a
l
i
z
e
"
,
 
i
c
o
n
:
 
<
P
l
a
y
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
V
i
s
u
a
l
i
z
e
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
t
r
y
"
,
 
l
a
b
e
l
:
 
"
T
r
y
 
I
t
"
,
 
i
c
o
n
:
 
<
T
a
r
g
e
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
T
r
y
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
i
n
s
i
g
h
t
"
,
 
l
a
b
e
l
:
 
"
I
n
s
i
g
h
t
"
,
 
i
c
o
n
:
 
<
L
i
g
h
t
b
u
l
b
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
I
n
s
i
g
h
t
T
a
b
 
/
>
 
}
,


 
 
 
 
.
.
.
(
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G


 
 
 
 
 
 
?
 
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
d
:
 
"
p
r
a
c
t
i
c
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
P
r
a
c
t
i
c
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
<
C
o
d
e
2
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
t
e
n
t
:
 
<
P
r
a
c
t
i
c
e
T
a
b
 
t
o
p
i
c
S
l
u
g
=
{
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
}
 
/
>
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]


 
 
 
 
 
 
:
 
[
]
)
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
 
r
e
c
u
r
s
i
v
e
 
f
u
n
c
t
i
o
n
 
f
(
n
)
 
t
h
a
t
 
c
a
l
l
s
 
i
t
s
e
l
f
 
o
n
c
e
 
w
i
t
h
 
a
r
g
u
m
e
n
t
 
n
-
1
 
u
s
e
s
 
h
o
w
 
m
u
c
h
 
a
u
x
i
l
i
a
r
y
 
s
p
a
c
e
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
O
(
1
)
"
,
 
"
O
(
l
o
g
 
n
)
"
,
 
"
O
(
n
)
"
,
 
"
O
(
n
²
)
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
E
a
c
h
 
c
a
l
l
 
l
i
v
e
s
 
o
n
 
t
h
e
 
s
t
a
c
k
 
u
n
t
i
l
 
i
t
s
 
b
a
s
e
 
c
a
s
e
 
r
e
t
u
r
n
s
.
 
D
e
p
t
h
 
n
 
→
 
n
 
f
r
a
m
e
s
 
→
 
O
(
n
)
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
i
c
h
 
v
e
r
s
i
o
n
 
o
f
 
f
a
c
t
o
r
i
a
l
 
u
s
e
s
 
O
(
1
)
 
a
u
x
i
l
i
a
r
y
 
s
p
a
c
e
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
R
e
c
u
r
s
i
v
e
 
w
i
t
h
 
c
a
c
h
e
d
 
r
e
s
u
l
t
s
"
,


 
 
 
 
 
 
 
 
"
P
l
a
i
n
 
r
e
c
u
r
s
i
v
e
"
,


 
 
 
 
 
 
 
 
"
I
t
e
r
a
t
i
v
e
 
w
i
t
h
 
a
 
l
o
o
p
"
,


 
 
 
 
 
 
 
 
"
N
o
n
e
,
 
a
l
l
 
f
a
c
t
o
r
i
a
l
 
i
m
p
l
e
m
e
n
t
a
t
i
o
n
s
 
n
e
e
d
 
O
(
n
)
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
A
 
s
i
m
p
l
e
 
f
o
r
-
l
o
o
p
 
w
i
t
h
 
a
 
s
i
n
g
l
e
 
a
c
c
u
m
u
l
a
t
o
r
 
u
s
e
s
 
o
n
e
 
f
r
a
m
e
 
a
n
d
 
o
n
e
 
s
c
a
l
a
r
,
 
c
o
n
s
t
a
n
t
 
s
p
a
c
e
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
M
e
r
g
e
 
s
o
r
t
'
s
 
e
x
t
r
a
 
a
r
r
a
y
 
d
u
r
i
n
g
 
m
e
r
g
e
s
 
m
a
k
e
s
 
i
t
s
 
a
u
x
i
l
i
a
r
y
 
s
p
a
c
e
…
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
O
(
1
)
"
,
 
"
O
(
l
o
g
 
n
)
"
,
 
"
O
(
n
)
"
,
 
"
O
(
n
 
l
o
g
 
n
)
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
T
h
e
 
t
e
m
p
o
r
a
r
y
 
b
u
f
f
e
r
 
h
o
l
d
s
 
u
p
 
t
o
 
n
 
e
l
e
m
e
n
t
s
 
w
h
i
l
e
 
m
e
r
g
i
n
g
,
 
s
o
 
a
u
x
i
l
i
a
r
y
 
s
p
a
c
e
 
i
s
 
O
(
n
)
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
Y
o
u
 
t
r
a
d
e
 
O
(
1
)
 
s
p
a
c
e
 
f
o
r
 
O
(
n
)
 
s
p
a
c
e
 
b
y
 
c
a
c
h
i
n
g
 
r
e
s
u
l
t
s
 
t
o
 
s
k
i
p
 
r
e
c
o
m
p
u
t
a
t
i
o
n
.
 
W
h
a
t
 
d
o
 
y
o
u
 
t
y
p
i
c
a
l
l
y
 
g
a
i
n
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
S
i
m
p
l
e
r
 
c
o
d
e
"
,
 
"
A
 
s
m
a
l
l
e
r
 
s
t
a
c
k
"
,
 
"
L
o
w
e
r
 
t
i
m
e
 
c
o
m
p
l
e
x
i
t
y
"
,
 
"
E
a
s
i
e
r
 
d
e
b
u
g
g
i
n
g
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
C
a
c
h
i
n
g
 
r
e
s
u
l
t
s
 
l
e
t
s
 
e
x
p
o
n
e
n
t
i
a
l
-
t
i
m
e
 
r
e
c
u
r
s
i
o
n
 
c
o
l
l
a
p
s
e
 
t
o
 
p
o
l
y
n
o
m
i
a
l
-
t
i
m
e
,
 
a
 
s
p
a
c
e
-
f
o
r
-
t
i
m
e
 
t
r
a
d
e
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
S
p
a
c
e
 
C
o
m
p
l
e
x
i
t
y
"


 
 
 
 
 
 
l
e
v
e
l
=
{
1
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
3
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
E
x
p
e
c
t
e
d
 
w
h
e
n
e
v
e
r
 
r
e
c
u
r
s
i
o
n
 
o
r
 
c
a
c
h
i
n
g
 
i
s
 
d
i
s
c
u
s
s
e
d
"


 
 
 
 
 
 
n
e
x
t
L
e
s
s
o
n
H
i
n
t
=
"
A
r
r
a
y
s
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


