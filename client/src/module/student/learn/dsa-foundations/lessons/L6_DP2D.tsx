
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
 
"
d
y
n
a
m
i
c
-
p
r
o
g
r
a
m
m
i
n
g
"
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
 
 
S
h
a
r
e
d
 
f
r
a
m
e
 
t
y
p
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
A
r
r
o
w
 
=
 
"
t
o
p
"
 
|
 
"
l
e
f
t
"
 
|
 
"
d
i
a
g
"
;




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


 
 
d
p
:
 
n
u
m
b
e
r
[
]
[
]
;


 
 
j
u
s
t
?
:
 
{
 
r
:
 
n
u
m
b
e
r
;
 
c
:
 
n
u
m
b
e
r
 
}
 
|
 
n
u
l
l
;


 
 
d
e
p
s
?
:
 
{
 
r
:
 
n
u
m
b
e
r
;
 
c
:
 
n
u
m
b
e
r
;
 
k
i
n
d
:
 
A
r
r
o
w
 
}
[
]
;


 
 
p
a
t
h
?
:
 
{
 
r
:
 
n
u
m
b
e
r
;
 
c
:
 
n
u
m
b
e
r
 
}
[
]
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
 
 
D
P
 
G
r
i
d
 
r
e
n
d
e
r
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
D
P
G
r
i
d
(
{
 
f
r
a
m
e
,
 
r
o
w
L
a
b
e
l
s
,
 
c
o
l
L
a
b
e
l
s
,
 
c
e
l
l
S
i
z
e
 
=
 
4
0
 
}
:
 
{
 
f
r
a
m
e
:
 
F
r
a
m
e
;
 
r
o
w
L
a
b
e
l
s
?
:
 
s
t
r
i
n
g
[
]
;
 
c
o
l
L
a
b
e
l
s
?
:
 
s
t
r
i
n
g
[
]
;
 
c
e
l
l
S
i
z
e
?
:
 
n
u
m
b
e
r
 
}
)
 
{


 
 
c
o
n
s
t
 
r
o
w
s
 
=
 
f
r
a
m
e
.
d
p
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
c
o
l
s
 
=
 
f
r
a
m
e
.
d
p
[
0
]
?
.
l
e
n
g
t
h
 
?
?
 
0
;


 
 
c
o
n
s
t
 
d
e
p
K
e
y
s
 
=
 
n
e
w
 
S
e
t
(
(
f
r
a
m
e
.
d
e
p
s
 
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
d
)
 
=
>
 
`
$
{
d
.
r
}
,
$
{
d
.
c
}
`
)
)
;


 
 
c
o
n
s
t
 
p
a
t
h
K
e
y
s
 
=
 
n
e
w
 
S
e
t
(
(
f
r
a
m
e
.
p
a
t
h
 
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
p
)
 
=
>
 
`
$
{
p
.
r
}
,
$
{
p
.
c
}
`
)
)
;


 
 
c
o
n
s
t
 
j
u
s
t
K
e
y
 
=
 
f
r
a
m
e
.
j
u
s
t
 
?
 
`
$
{
f
r
a
m
e
.
j
u
s
t
.
r
}
,
$
{
f
r
a
m
e
.
j
u
s
t
.
c
}
`
 
:
 
n
u
l
l
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
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
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
 
p
-
1
"
>


 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
`
$
{
c
e
l
l
S
i
z
e
 
*
 
0
.
9
}
p
x
 
r
e
p
e
a
t
(
$
{
c
o
l
s
}
,
 
$
{
c
e
l
l
S
i
z
e
}
p
x
)
`
,
 
g
r
i
d
A
u
t
o
R
o
w
s
:
 
`
$
{
c
e
l
l
S
i
z
e
}
p
x
`
,
 
g
a
p
:
 
2
 
}
}
>


 
 
 
 
 
 
 
 
<
d
i
v
 
/
>


 
 
 
 
 
 
 
 
{
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
c
o
l
s
 
}
)
.
m
a
p
(
(
_
,
 
c
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
`
c
h
-
$
{
c
}
`
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
f
l
e
x
 
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
c
e
n
t
e
r
 
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
b
o
l
d
 
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
 
f
o
n
t
-
m
o
n
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
l
L
a
b
e
l
s
?
.
[
c
]
 
?
?
 
c
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
{
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
r
o
w
s
 
}
)
.
f
l
a
t
M
a
p
(
(
_
,
 
r
)
 
=
>
 
[


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
k
e
y
=
{
`
r
h
-
$
{
r
}
`
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
f
l
e
x
 
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
c
e
n
t
e
r
 
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
b
o
l
d
 
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
 
f
o
n
t
-
m
o
n
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
w
L
a
b
e
l
s
?
.
[
r
]
 
?
?
 
r
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>
,


 
 
 
 
 
 
 
 
 
 
.
.
.
(
f
r
a
m
e
.
d
p
[
r
]
 
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
v
,
 
c
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
k
e
y
 
=
 
`
$
{
r
}
,
$
{
c
}
`
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
J
u
s
t
 
=
 
k
e
y
 
=
=
=
 
j
u
s
t
K
e
y
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
D
e
p
 
=
 
d
e
p
K
e
y
s
.
h
a
s
(
k
e
y
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
P
a
t
h
 
=
 
p
a
t
h
K
e
y
s
.
h
a
s
(
k
e
y
)
;


 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
 
c
l
s
 
=
 
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
1
0
0
"
;


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
i
s
P
a
t
h
)
 
c
l
s
 
=
 
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
;


 
 
 
 
 
 
 
 
 
 
 
 
e
l
s
e
 
i
f
 
(
i
s
J
u
s
t
)
 
c
l
s
 
=
 
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
;


 
 
 
 
 
 
 
 
 
 
 
 
e
l
s
e
 
i
f
 
(
i
s
D
e
p
)
 
c
l
s
 
=
 
"
b
o
r
d
e
r
-
a
m
b
e
r
-
4
0
0
 
b
g
-
a
m
b
e
r
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
a
m
b
e
r
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
a
m
b
e
r
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
a
m
b
e
r
-
2
0
0
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
d
i
v
 
k
e
y
=
{
k
e
y
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
f
l
e
x
 
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
c
e
n
t
e
r
 
r
o
u
n
d
e
d
 
b
o
r
d
e
r
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
 
$
{
c
l
s
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
c
e
l
l
S
i
z
e
 
>
=
 
3
6
 
?
 
"
0
.
7
8
r
e
m
"
 
:
 
"
0
.
6
8
r
e
m
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
 
=
=
=
 
-
1
 
?
 
"
∞
"
 
:
 
v
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
)
,


 
 
 
 
 
 
 
 
]
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
C
S
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
L
C
S
 
=
 
[
"
d
p
[
i
]
[
0
]
 
=
 
0
;
 
d
p
[
0
]
[
j
]
 
=
 
0
"
,
 
"
f
o
r
 
i
 
i
n
 
1
.
.
m
:
"
,
 
"
 
 
f
o
r
 
j
 
i
n
 
1
.
.
n
:
"
,
 
"
 
 
 
 
i
f
 
A
[
i
-
1
]
 
=
=
 
B
[
j
-
1
]
:
"
,
 
"
 
 
 
 
 
 
d
p
[
i
]
[
j
]
 
=
 
d
p
[
i
-
1
]
[
j
-
1
]
 
+
 
1
"
,
 
"
 
 
 
 
e
l
s
e
:
"
,
 
"
 
 
 
 
 
 
d
p
[
i
]
[
j
]
 
=
 
m
a
x
(
d
p
[
i
-
1
]
[
j
]
,
 
d
p
[
i
]
[
j
-
1
]
)
"
,
 
"
r
e
t
u
r
n
 
d
p
[
m
]
[
n
]
"
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
L
C
S
(
A
:
 
s
t
r
i
n
g
,
 
B
:
 
s
t
r
i
n
g
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
 
m
 
=
 
A
.
l
e
n
g
t
h
,
 
n
 
=
 
B
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
d
p
:
 
n
u
m
b
e
r
[
]
[
]
 
=
 
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
m
 
+
 
1
 
}
,
 
(
)
 
=
>
 
A
r
r
a
y
(
n
 
+
 
1
)
.
f
i
l
l
(
0
)
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


 
 
f
r
a
m
e
s
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
 
m
,
 
n
 
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
 
"
I
n
i
t
i
a
l
i
z
e
 
t
h
e
 
0
t
h
 
r
o
w
 
a
n
d
 
0
t
h
 
c
o
l
u
m
n
 
w
i
t
h
 
z
e
r
o
s
.
"
,
 
d
p
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
 
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
 
1
;
 
i
 
<
=
 
m
;
 
i
+
+
)
 
{


 
 
 
 
f
o
r
 
(
l
e
t
 
j
 
=
 
1
;
 
j
 
<
=
 
n
;
 
j
+
+
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
a
 
=
 
A
[
i
 
-
 
1
]
,
 
b
 
=
 
B
[
j
 
-
 
1
]
;


 
 
 
 
 
 
f
r
a
m
e
s
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
 
i
,
 
j
,
 
A
:
 
a
,
 
B
:
 
b
 
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
o
m
p
a
r
e
 
A
[
$
{
i
 
-
 
1
}
]
=
'
$
{
a
}
'
 
w
i
t
h
 
B
[
$
{
j
 
-
 
1
}
]
=
'
$
{
b
}
'
.
`
,
 
d
p
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
 
}
)
;


 
 
 
 
 
 
i
f
 
(
a
 
=
=
=
 
b
)
 
{


 
 
 
 
 
 
 
 
d
p
[
i
]
[
j
]
 
=
 
d
p
[
i
 
-
 
1
]
[
j
 
-
 
1
]
 
+
 
1
;


 
 
 
 
 
 
 
 
f
r
a
m
e
s
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
 
i
,
 
j
,
 
v
a
l
u
e
:
 
d
p
[
i
]
[
j
]
 
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
M
a
t
c
h
!
 
d
p
[
$
{
i
}
]
[
$
{
j
}
]
 
=
 
d
p
[
$
{
i
 
-
 
1
}
]
[
$
{
j
 
-
 
1
}
]
 
+
 
1
 
=
 
$
{
d
p
[
i
]
[
j
]
}
.
`
,
 
d
p
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
,
 
j
u
s
t
:
 
{
 
r
:
 
i
,
 
c
:
 
j
 
}
,
 
d
e
p
s
:
 
[
{
 
r
:
 
i
 
-
 
1
,
 
c
:
 
j
 
-
 
1
,
 
k
i
n
d
:
 
"
d
i
a
g
"
 
}
]
 
}
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
d
p
[
i
]
[
j
]
 
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
d
p
[
i
 
-
 
1
]
[
j
]
,
 
d
p
[
i
]
[
j
 
-
 
1
]
)
;


 
 
 
 
 
 
 
 
f
r
a
m
e
s
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
 
6
,
 
v
a
r
s
:
 
{
 
i
,
 
j
,
 
v
a
l
u
e
:
 
d
p
[
i
]
[
j
]
 
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
N
o
 
m
a
t
c
h
.
 
d
p
[
$
{
i
}
]
[
$
{
j
}
]
 
=
 
m
a
x
(
$
{
d
p
[
i
 
-
 
1
]
[
j
]
}
,
 
$
{
d
p
[
i
]
[
j
 
-
 
1
]
}
)
 
=
 
$
{
d
p
[
i
]
[
j
]
}
.
`
,
 
d
p
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
,
 
j
u
s
t
:
 
{
 
r
:
 
i
,
 
c
:
 
j
 
}
,
 
d
e
p
s
:
 
[
{
 
r
:
 
i
 
-
 
1
,
 
c
:
 
j
,
 
k
i
n
d
:
 
"
t
o
p
"
 
}
,
 
{
 
r
:
 
i
,
 
c
:
 
j
 
-
 
1
,
 
k
i
n
d
:
 
"
l
e
f
t
"
 
}
]
 
}
)
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
}


 
 
c
o
n
s
t
 
p
a
t
h
:
 
{
 
r
:
 
n
u
m
b
e
r
;
 
c
:
 
n
u
m
b
e
r
 
}
[
]
 
=
 
[
]
;


 
 
l
e
t
 
p
i
 
=
 
m
,
 
p
j
 
=
 
n
;


 
 
w
h
i
l
e
 
(
p
i
 
>
 
0
 
&
&
 
p
j
 
>
 
0
)
 
{


 
 
 
 
i
f
 
(
A
[
p
i
 
-
 
1
]
 
=
=
=
 
B
[
p
j
 
-
 
1
]
)
 
{
 
p
a
t
h
.
p
u
s
h
(
{
 
r
:
 
p
i
,
 
c
:
 
p
j
 
}
)
;
 
p
i
-
-
;
 
p
j
-
-
;
 
}


 
 
 
 
e
l
s
e
 
i
f
 
(
d
p
[
p
i
 
-
 
1
]
[
p
j
]
 
>
=
 
d
p
[
p
i
]
[
p
j
 
-
 
1
]
)
 
p
i
-
-
;


 
 
 
 
e
l
s
e
 
p
j
-
-
;


 
 
}


 
 
f
r
a
m
e
s
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
 
7
,
 
v
a
r
s
:
 
{
 
a
n
s
w
e
r
:
 
d
p
[
m
]
[
n
]
 
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
C
S
 
l
e
n
g
t
h
 
=
 
$
{
d
p
[
m
]
[
n
]
}
.
 
D
i
a
g
o
n
a
l
 
m
a
t
c
h
e
s
 
f
o
r
m
 
t
h
e
 
s
e
q
u
e
n
c
e
.
`
,
 
d
p
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
,
 
p
a
t
h
 
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
r
a
m
e
s
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
 
 
E
d
i
t
 
D
i
s
t
a
n
c
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
E
D
 
=
 
[
"
d
p
[
i
]
[
0
]
 
=
 
i
;
 
d
p
[
0
]
[
j
]
 
=
 
j
"
,
 
"
f
o
r
 
i
 
i
n
 
1
.
.
m
:
"
,
 
"
 
 
f
o
r
 
j
 
i
n
 
1
.
.
n
:
"
,
 
"
 
 
 
 
i
f
 
A
[
i
-
1
]
 
=
=
 
B
[
j
-
1
]
:
 
d
p
[
i
]
[
j
]
 
=
 
d
p
[
i
-
1
]
[
j
-
1
]
"
,
 
"
 
 
 
 
e
l
s
e
:
 
d
p
[
i
]
[
j
]
 
=
 
1
 
+
 
m
i
n
(
"
,
 
"
 
 
 
 
 
 
 
d
p
[
i
-
1
]
[
j
]
,
 
 
 
 
/
/
 
d
e
l
e
t
e
"
,
 
"
 
 
 
 
 
 
 
d
p
[
i
]
[
j
-
1
]
,
 
 
 
 
/
/
 
i
n
s
e
r
t
"
,
 
"
 
 
 
 
 
 
 
d
p
[
i
-
1
]
[
j
-
1
]
)
 
 
/
/
 
r
e
p
l
a
c
e
"
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
E
D
(
A
:
 
s
t
r
i
n
g
,
 
B
:
 
s
t
r
i
n
g
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
 
m
 
=
 
A
.
l
e
n
g
t
h
,
 
n
 
=
 
B
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
d
p
:
 
n
u
m
b
e
r
[
]
[
]
 
=
 
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
m
 
+
 
1
 
}
,
 
(
)
 
=
>
 
A
r
r
a
y
(
n
 
+
 
1
)
.
f
i
l
l
(
0
)
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


 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
=
 
m
;
 
i
+
+
)
 
d
p
[
i
]
[
0
]
 
=
 
i
;


 
 
f
o
r
 
(
l
e
t
 
j
 
=
 
0
;
 
j
 
<
=
 
n
;
 
j
+
+
)
 
d
p
[
0
]
[
j
]
 
=
 
j
;


 
 
f
r
a
m
e
s
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
 
m
,
 
n
 
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
 
"
B
a
s
e
:
 
e
m
p
t
y
 
p
r
e
f
i
x
 
c
o
s
t
s
 
=
 
p
r
e
f
i
x
 
l
e
n
g
t
h
.
"
,
 
d
p
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
 
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
 
1
;
 
i
 
<
=
 
m
;
 
i
+
+
)
 
{


 
 
 
 
f
o
r
 
(
l
e
t
 
j
 
=
 
1
;
 
j
 
<
=
 
n
;
 
j
+
+
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
a
 
=
 
A
[
i
 
-
 
1
]
,
 
b
 
=
 
B
[
j
 
-
 
1
]
;


 
 
 
 
 
 
i
f
 
(
a
 
=
=
=
 
b
)
 
{


 
 
 
 
 
 
 
 
d
p
[
i
]
[
j
]
 
=
 
d
p
[
i
 
-
 
1
]
[
j
 
-
 
1
]
;


 
 
 
 
 
 
 
 
f
r
a
m
e
s
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
 
i
,
 
j
,
 
A
:
 
a
,
 
B
:
 
b
,
 
v
a
l
u
e
:
 
d
p
[
i
]
[
j
]
 
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
'
$
{
a
}
'
 
=
=
 
'
$
{
b
}
'
 
→
 
n
o
 
e
d
i
t
.
 
d
p
[
$
{
i
}
]
[
$
{
j
}
]
 
=
 
$
{
d
p
[
i
]
[
j
]
}
.
`
,
 
d
p
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
,
 
j
u
s
t
:
 
{
 
r
:
 
i
,
 
c
:
 
j
 
}
,
 
d
e
p
s
:
 
[
{
 
r
:
 
i
 
-
 
1
,
 
c
:
 
j
 
-
 
1
,
 
k
i
n
d
:
 
"
d
i
a
g
"
 
}
]
 
}
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
e
l
 
=
 
d
p
[
i
 
-
 
1
]
[
j
]
,
 
i
n
s
 
=
 
d
p
[
i
]
[
j
 
-
 
1
]
,
 
r
e
p
 
=
 
d
p
[
i
 
-
 
1
]
[
j
 
-
 
1
]
;


 
 
 
 
 
 
 
 
d
p
[
i
]
[
j
]
 
=
 
1
 
+
 
M
a
t
h
.
m
i
n
(
d
e
l
,
 
i
n
s
,
 
r
e
p
)
;


 
 
 
 
 
 
 
 
f
r
a
m
e
s
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
 
i
,
 
j
,
 
A
:
 
a
,
 
B
:
 
b
,
 
v
a
l
u
e
:
 
d
p
[
i
]
[
j
]
 
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
'
$
{
a
}
'
 
≠
 
'
$
{
b
}
'
 
→
 
1
 
+
 
m
i
n
(
d
e
l
=
$
{
d
e
l
}
,
 
i
n
s
=
$
{
i
n
s
}
,
 
r
e
p
=
$
{
r
e
p
}
)
 
=
 
$
{
d
p
[
i
]
[
j
]
}
.
`
,
 
d
p
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
,
 
j
u
s
t
:
 
{
 
r
:
 
i
,
 
c
:
 
j
 
}
,
 
d
e
p
s
:
 
[
{
 
r
:
 
i
 
-
 
1
,
 
c
:
 
j
,
 
k
i
n
d
:
 
"
t
o
p
"
 
}
,
 
{
 
r
:
 
i
,
 
c
:
 
j
 
-
 
1
,
 
k
i
n
d
:
 
"
l
e
f
t
"
 
}
,
 
{
 
r
:
 
i
 
-
 
1
,
 
c
:
 
j
 
-
 
1
,
 
k
i
n
d
:
 
"
d
i
a
g
"
 
}
]
 
}
)
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
}


 
 
f
r
a
m
e
s
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
 
6
,
 
v
a
r
s
:
 
{
 
a
n
s
w
e
r
:
 
d
p
[
m
]
[
n
]
 
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
E
d
i
t
 
d
i
s
t
a
n
c
e
 
=
 
$
{
d
p
[
m
]
[
n
]
}
.
`
,
 
d
p
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
 
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
r
a
m
e
s
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
 
 
0
/
1
 
K
n
a
p
s
a
c
k
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
K
N
 
=
 
[
"
d
p
[
0
]
[
w
]
 
=
 
0
"
,
 
"
f
o
r
 
i
 
i
n
 
1
.
.
n
:
"
,
 
"
 
 
f
o
r
 
w
 
i
n
 
0
.
.
W
:
"
,
 
"
 
 
 
 
i
f
 
w
e
i
g
h
t
s
[
i
-
1
]
 
>
 
w
:
"
,
 
"
 
 
 
 
 
 
d
p
[
i
]
[
w
]
 
=
 
d
p
[
i
-
1
]
[
w
]
"
,
 
"
 
 
 
 
e
l
s
e
:
"
,
 
"
 
 
 
 
 
 
d
p
[
i
]
[
w
]
 
=
 
m
a
x
(
d
p
[
i
-
1
]
[
w
]
,
"
,
 
"
 
 
 
 
 
 
 
 
 
d
p
[
i
-
1
]
[
w
-
w
e
i
g
h
t
s
[
i
-
1
]
]
 
+
 
v
a
l
u
e
s
[
i
-
1
]
)
"
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
K
n
a
p
(
i
t
e
m
s
:
 
{
 
w
:
 
n
u
m
b
e
r
;
 
v
:
 
n
u
m
b
e
r
 
}
[
]
,
 
W
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
 
n
 
=
 
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
;


 
 
c
o
n
s
t
 
d
p
:
 
n
u
m
b
e
r
[
]
[
]
 
=
 
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
n
 
+
 
1
 
}
,
 
(
)
 
=
>
 
A
r
r
a
y
(
W
 
+
 
1
)
.
f
i
l
l
(
0
)
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


 
 
f
r
a
m
e
s
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
,
 
W
 
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
 
"
B
a
s
e
:
 
0
 
i
t
e
m
s
 
→
 
v
a
l
u
e
 
0
.
"
,
 
d
p
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
 
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
 
1
;
 
i
 
<
=
 
n
;
 
i
+
+
)
 
{


 
 
 
 
c
o
n
s
t
 
{
 
w
:
 
w
i
,
 
v
:
 
v
i
 
}
 
=
 
i
t
e
m
s
[
i
 
-
 
1
]
;


 
 
 
 
f
o
r
 
(
l
e
t
 
w
 
=
 
0
;
 
w
 
<
=
 
W
;
 
w
+
+
)
 
{


 
 
 
 
 
 
i
f
 
(
w
i
 
>
 
w
)
 
{


 
 
 
 
 
 
 
 
d
p
[
i
]
[
w
]
 
=
 
d
p
[
i
 
-
 
1
]
[
w
]
;


 
 
 
 
 
 
 
 
f
r
a
m
e
s
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
 
i
,
 
w
,
 
s
k
i
p
:
 
1
,
 
v
a
l
u
e
:
 
d
p
[
i
]
[
w
]
 
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
t
e
m
 
$
{
i
}
 
w
e
i
g
h
t
 
$
{
w
i
}
 
>
 
$
{
w
}
.
 
S
k
i
p
.
 
d
p
[
$
{
i
}
]
[
$
{
w
}
]
 
=
 
$
{
d
p
[
i
]
[
w
]
}
.
`
,
 
d
p
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
,
 
j
u
s
t
:
 
{
 
r
:
 
i
,
 
c
:
 
w
 
}
,
 
d
e
p
s
:
 
[
{
 
r
:
 
i
 
-
 
1
,
 
c
:
 
w
,
 
k
i
n
d
:
 
"
t
o
p
"
 
}
]
 
}
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
k
i
p
 
=
 
d
p
[
i
 
-
 
1
]
[
w
]
,
 
t
a
k
e
 
=
 
d
p
[
i
 
-
 
1
]
[
w
 
-
 
w
i
]
 
+
 
v
i
;


 
 
 
 
 
 
 
 
d
p
[
i
]
[
w
]
 
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
s
k
i
p
,
 
t
a
k
e
)
;


 
 
 
 
 
 
 
 
f
r
a
m
e
s
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
 
6
,
 
v
a
r
s
:
 
{
 
i
,
 
w
,
 
s
k
i
p
,
 
t
a
k
e
,
 
v
a
l
u
e
:
 
d
p
[
i
]
[
w
]
 
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
t
e
m
 
$
{
i
}
:
 
s
k
i
p
=
$
{
s
k
i
p
}
,
 
t
a
k
e
=
$
{
t
a
k
e
}
.
 
P
i
c
k
 
m
a
x
 
=
 
$
{
d
p
[
i
]
[
w
]
}
.
`
,
 
d
p
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
,
 
j
u
s
t
:
 
{
 
r
:
 
i
,
 
c
:
 
w
 
}
,
 
d
e
p
s
:
 
[
{
 
r
:
 
i
 
-
 
1
,
 
c
:
 
w
,
 
k
i
n
d
:
 
"
t
o
p
"
 
}
,
 
{
 
r
:
 
i
 
-
 
1
,
 
c
:
 
w
 
-
 
w
i
,
 
k
i
n
d
:
 
"
l
e
f
t
"
 
}
]
 
}
)
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
}


 
 
f
r
a
m
e
s
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
 
7
,
 
v
a
r
s
:
 
{
 
a
n
s
w
e
r
:
 
d
p
[
n
]
[
W
]
 
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
M
a
x
 
v
a
l
u
e
 
=
 
$
{
d
p
[
n
]
[
W
]
}
.
`
,
 
d
p
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
 
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
r
a
m
e
s
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
 
 
M
a
t
r
i
x
 
C
h
a
i
n
 
M
u
l
t
i
p
l
i
c
a
t
i
o
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
M
C
M
 
=
 
[
"
d
p
[
i
]
[
i
]
 
=
 
0
 
f
o
r
 
a
l
l
 
i
"
,
 
"
f
o
r
 
L
 
i
n
 
2
.
.
n
-
1
:
"
,
 
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
-
L
:
"
,
 
"
 
 
 
 
j
 
=
 
i
 
+
 
L
 
-
 
1
"
,
 
"
 
 
 
 
d
p
[
i
]
[
j
]
 
=
 
∞
"
,
 
"
 
 
 
 
f
o
r
 
k
 
i
n
 
i
.
.
j
-
1
:
"
,
 
"
 
 
 
 
 
 
c
o
s
t
 
=
 
d
p
[
i
]
[
k
]
 
+
 
d
p
[
k
+
1
]
[
j
]
 
+
 
p
[
i
]
·
p
[
k
+
1
]
·
p
[
j
+
1
]
"
,
 
"
 
 
 
 
 
 
d
p
[
i
]
[
j
]
 
=
 
m
i
n
(
d
p
[
i
]
[
j
]
,
 
c
o
s
t
)
"
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
M
C
M
(
p
:
 
n
u
m
b
e
r
[
]
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
 
n
 
=
 
p
.
l
e
n
g
t
h
 
-
 
1
;


 
 
c
o
n
s
t
 
d
p
:
 
n
u
m
b
e
r
[
]
[
]
 
=
 
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
n
 
}
,
 
(
)
 
=
>
 
A
r
r
a
y
(
n
)
.
f
i
l
l
(
0
)
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


 
 
f
r
a
m
e
s
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
 
"
B
a
s
e
:
 
s
i
n
g
l
e
 
m
a
t
r
i
c
e
s
 
c
o
s
t
 
0
.
"
,
 
d
p
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
 
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
 
L
 
=
 
2
;
 
L
 
<
=
 
n
;
 
L
+
+
)
 
{


 
 
 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
=
 
n
 
-
 
L
;
 
i
+
+
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
j
 
=
 
i
 
+
 
L
 
-
 
1
;


 
 
 
 
 
 
d
p
[
i
]
[
j
]
 
=
 
I
n
f
i
n
i
t
y
;


 
 
 
 
 
 
f
r
a
m
e
s
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
 
i
,
 
j
,
 
l
e
n
:
 
L
 
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
S
o
l
v
e
 
M
[
$
{
i
}
.
.
$
{
j
}
]
 
(
l
e
n
g
t
h
 
$
{
L
}
)
.
`
,
 
d
p
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
.
m
a
p
(
(
x
)
 
=
>
 
x
 
=
=
=
 
I
n
f
i
n
i
t
y
 
?
 
-
1
 
:
 
x
)
]
)
 
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
 
k
 
=
 
i
;
 
k
 
<
 
j
;
 
k
+
+
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
s
t
 
=
 
d
p
[
i
]
[
k
]
 
+
 
d
p
[
k
 
+
 
1
]
[
j
]
 
+
 
p
[
i
]
 
*
 
p
[
k
 
+
 
1
]
 
*
 
p
[
j
 
+
 
1
]
;


 
 
 
 
 
 
 
 
i
f
 
(
c
o
s
t
 
<
 
d
p
[
i
]
[
j
]
)
 
{


 
 
 
 
 
 
 
 
 
 
d
p
[
i
]
[
j
]
 
=
 
c
o
s
t
;


 
 
 
 
 
 
 
 
 
 
f
r
a
m
e
s
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
 
6
,
 
v
a
r
s
:
 
{
 
i
,
 
j
,
 
k
,
 
c
o
s
t
,
 
v
a
l
u
e
:
 
d
p
[
i
]
[
j
]
 
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
S
p
l
i
t
 
a
t
 
k
=
$
{
k
}
:
 
c
o
s
t
 
=
 
$
{
c
o
s
t
}
.
 
N
e
w
 
b
e
s
t
.
`
,
 
d
p
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
.
m
a
p
(
(
x
)
 
=
>
 
x
 
=
=
=
 
I
n
f
i
n
i
t
y
 
?
 
-
1
 
:
 
x
)
]
)
,
 
j
u
s
t
:
 
{
 
r
:
 
i
,
 
c
:
 
j
 
}
,
 
d
e
p
s
:
 
[
{
 
r
:
 
i
,
 
c
:
 
k
,
 
k
i
n
d
:
 
"
l
e
f
t
"
 
}
,
 
{
 
r
:
 
k
 
+
 
1
,
 
c
:
 
j
,
 
k
i
n
d
:
 
"
t
o
p
"
 
}
]
 
}
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}


 
 
 
 
}


 
 
}


 
 
f
r
a
m
e
s
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
 
7
,
 
v
a
r
s
:
 
{
 
a
n
s
w
e
r
:
 
d
p
[
0
]
[
n
 
-
 
1
]
 
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
M
i
n
 
s
c
a
l
a
r
 
m
u
l
t
i
p
l
i
c
a
t
i
o
n
s
 
=
 
$
{
d
p
[
0
]
[
n
 
-
 
1
]
}
.
`
,
 
d
p
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
 
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
r
a
m
e
s
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
l
c
s
"
 
|
 
"
e
d
"
 
|
 
"
k
n
a
p
"
 
|
 
"
m
c
m
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
l
c
s
"
)
;




 
 
c
o
n
s
t
 
[
l
c
s
A
,
 
s
e
t
L
c
s
A
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
A
B
C
B
D
A
B
"
)
;


 
 
c
o
n
s
t
 
[
l
c
s
B
,
 
s
e
t
L
c
s
B
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
B
D
C
A
B
A
"
)
;


 
 
c
o
n
s
t
 
l
c
s
F
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
 
b
u
i
l
d
L
C
S
(
l
c
s
A
,
 
l
c
s
B
)
,
 
[
l
c
s
A
,
 
l
c
s
B
]
)
;




 
 
c
o
n
s
t
 
[
e
d
A
,
 
s
e
t
E
d
A
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
k
i
t
t
e
n
"
)
;


 
 
c
o
n
s
t
 
[
e
d
B
,
 
s
e
t
E
d
B
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
s
i
t
t
i
n
g
"
)
;


 
 
c
o
n
s
t
 
e
d
F
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
 
b
u
i
l
d
E
D
(
e
d
A
,
 
e
d
B
)
,
 
[
e
d
A
,
 
e
d
B
]
)
;




 
 
c
o
n
s
t
 
[
k
n
a
p
I
n
,
 
s
e
t
K
n
a
p
I
n
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
2
,
3
 
3
,
4
 
4
,
5
 
5
,
6
"
)
;


 
 
c
o
n
s
t
 
[
k
n
a
p
W
,
 
s
e
t
K
n
a
p
W
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
8
"
)
;


 
 
c
o
n
s
t
 
k
n
a
p
I
t
e
m
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
 
{


 
 
 
 
c
o
n
s
t
 
o
u
t
:
 
{
 
w
:
 
n
u
m
b
e
r
;
 
v
:
 
n
u
m
b
e
r
 
}
[
]
 
=
 
[
]
;


 
 
 
 
k
n
a
p
I
n
.
t
r
i
m
(
)
.
s
p
l
i
t
(
/
\
s
+
/
)
.
f
o
r
E
a
c
h
(
(
t
)
 
=
>
 
{


 
 
 
 
 
 
c
o
n
s
t
 
[
w
,
 
v
]
 
=
 
t
.
s
p
l
i
t
(
"
,
"
)
.
m
a
p
(
(
x
)
 
=
>
 
N
u
m
b
e
r
(
x
)
)
;


 
 
 
 
 
 
i
f
 
(
!
N
u
m
b
e
r
.
i
s
N
a
N
(
w
)
 
&
&
 
!
N
u
m
b
e
r
.
i
s
N
a
N
(
v
)
)
 
o
u
t
.
p
u
s
h
(
{
 
w
,
 
v
 
}
)
;


 
 
 
 
}
)
;


 
 
 
 
r
e
t
u
r
n
 
o
u
t
;


 
 
}
,
 
[
k
n
a
p
I
n
]
)
;


 
 
c
o
n
s
t
 
k
n
a
p
C
a
p
 
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
0
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
2
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
k
n
a
p
W
)
 
|
|
 
0
)
)
)
;


 
 
c
o
n
s
t
 
k
n
a
p
F
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
 
b
u
i
l
d
K
n
a
p
(
k
n
a
p
I
t
e
m
s
,
 
k
n
a
p
C
a
p
)
,
 
[
k
n
a
p
I
t
e
m
s
,
 
k
n
a
p
C
a
p
]
)
;




 
 
c
o
n
s
t
 
[
m
c
m
S
t
r
,
 
s
e
t
M
c
m
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
3
0
,
 
3
5
,
 
1
5
,
 
5
,
 
1
0
,
 
2
0
,
 
2
5
"
)
;


 
 
c
o
n
s
t
 
m
c
m
P
 
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
 
m
c
m
S
t
r
.
s
p
l
i
t
(
/
[
,
\
s
]
+
/
)
.
m
a
p
(
(
x
)
 
=
>
 
N
u
m
b
e
r
(
x
)
)
.
f
i
l
t
e
r
(
(
x
)
 
=
>
 
!
N
u
m
b
e
r
.
i
s
N
a
N
(
x
)
 
&
&
 
x
 
>
 
0
)
,
 
[
m
c
m
S
t
r
]
)
;


 
 
c
o
n
s
t
 
m
c
m
F
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
 
m
c
m
P
.
l
e
n
g
t
h
 
>
=
 
2
 
?
 
b
u
i
l
d
M
C
M
(
m
c
m
P
)
 
:
 
[
]
,
 
[
m
c
m
P
]
)
;




 
 
c
o
n
s
t
 
p
L
C
S
 
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
l
c
s
F
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
 
p
E
D
 
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
e
d
F
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
 
p
K
N
 
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
k
n
a
p
F
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
 
p
M
C
M
 
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
m
c
m
F
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
 
m
o
d
e
T
o
g
g
l
e
 
=
 
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
 
g
a
p
-
1
.
5
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
{
(
[
[
"
l
c
s
"
,
 
"
L
C
S
"
]
,
 
[
"
e
d
"
,
 
"
E
d
i
t
 
D
i
s
t
a
n
c
e
"
]
,
 
[
"
k
n
a
p
"
,
 
"
0
/
1
 
K
n
a
p
s
a
c
k
"
]
,
 
[
"
m
c
m
"
,
 
"
M
a
t
r
i
x
 
C
h
a
i
n
"
]
]
 
a
s
 
[
M
o
d
e
,
 
s
t
r
i
n
g
]
[
]
)
.
m
a
p
(
(
[
m
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
m
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
m
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
 
m
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


 
 
)
;




 
 
c
o
n
s
t
 
l
e
g
e
n
d
 
=
 
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
 
g
a
p
-
3
 
t
e
x
t
-
x
s
 
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
 
f
l
e
x
-
w
r
a
p
"
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
i
n
l
i
n
e
-
f
l
e
x
 
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
1
.
5
"
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
w
-
2
.
5
 
h
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
s
m
 
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
"
 
/
>
j
u
s
t
 
f
i
l
l
e
d
<
/
s
p
a
n
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
i
n
l
i
n
e
-
f
l
e
x
 
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
1
.
5
"
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
w
-
2
.
5
 
h
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
s
m
 
b
g
-
a
m
b
e
r
-
4
0
0
"
 
/
>
d
e
p
e
n
d
e
n
c
y
<
/
s
p
a
n
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
i
n
l
i
n
e
-
f
l
e
x
 
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
1
.
5
"
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
w
-
2
.
5
 
h
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
s
m
 
b
g
-
r
o
s
e
-
4
0
0
"
 
/
>
L
C
S
 
p
a
t
h
<
/
s
p
a
n
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;




 
 
i
f
 
(
m
o
d
e
 
=
=
=
 
"
l
c
s
"
)
 
{


 
 
 
 
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
L
C
S
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
 
c
o
l
L
a
b
e
l
s
 
=
 
[
"
∅
"
,
 
.
.
.
l
c
s
B
.
s
p
l
i
t
(
"
"
)
]
;


 
 
 
 
c
o
n
s
t
 
r
o
w
L
a
b
e
l
s
 
=
 
[
"
∅
"
,
 
.
.
.
l
c
s
A
.
s
p
l
i
t
(
"
"
)
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
"
L
o
n
g
e
s
t
 
C
o
m
m
o
n
 
S
u
b
s
e
q
u
e
n
c
e
"
 
p
l
a
y
e
r
=
{
p
L
C
S
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
{
m
o
d
e
T
o
g
g
l
e
}
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
S
t
r
i
n
g
 
A
"
 
v
a
l
u
e
=
{
l
c
s
A
}
 
h
e
l
p
e
r
=
"
C
a
p
p
e
d
 
a
t
 
8
 
c
h
a
r
s
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
A
B
C
B
D
A
B
"
,
 
v
a
l
u
e
:
 
"
A
B
C
B
D
A
B
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
A
G
C
A
T
"
,
 
v
a
l
u
e
:
 
"
A
G
C
A
T
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
A
B
C
"
,
 
v
a
l
u
e
:
 
"
A
B
C
"
 
}
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
 
s
e
t
L
c
s
A
(
v
.
s
l
i
c
e
(
0
,
 
8
)
)
}
 
/
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
S
t
r
i
n
g
 
B
"
 
v
a
l
u
e
=
{
l
c
s
B
}
 
h
e
l
p
e
r
=
"
C
a
p
p
e
d
 
a
t
 
8
 
c
h
a
r
s
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
B
D
C
A
B
A
"
,
 
v
a
l
u
e
:
 
"
B
D
C
A
B
A
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
G
A
C
"
,
 
v
a
l
u
e
:
 
"
G
A
C
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
D
E
F
"
,
 
v
a
l
u
e
:
 
"
D
E
F
"
 
}
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
 
s
e
t
L
c
s
B
(
v
.
s
l
i
c
e
(
0
,
 
8
)
)
}
 
/
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
P
S
E
U
D
O
_
L
C
S
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
v
a
l
u
e
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
{
l
e
g
e
n
d
}
{
f
r
a
m
e
 
&
&
 
<
D
P
G
r
i
d
 
f
r
a
m
e
=
{
f
r
a
m
e
}
 
r
o
w
L
a
b
e
l
s
=
{
r
o
w
L
a
b
e
l
s
}
 
c
o
l
L
a
b
e
l
s
=
{
c
o
l
L
a
b
e
l
s
}
 
/
>
}
{
f
r
a
m
e
 
&
&
 
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
f
r
a
m
e
.
m
e
s
s
a
g
e
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
}
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


 
 
i
f
 
(
m
o
d
e
 
=
=
=
 
"
e
d
"
)
 
{


 
 
 
 
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
E
D
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
 
c
o
l
L
a
b
e
l
s
 
=
 
[
"
∅
"
,
 
.
.
.
e
d
B
.
s
p
l
i
t
(
"
"
)
]
;


 
 
 
 
c
o
n
s
t
 
r
o
w
L
a
b
e
l
s
 
=
 
[
"
∅
"
,
 
.
.
.
e
d
A
.
s
p
l
i
t
(
"
"
)
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
"
E
d
i
t
 
D
i
s
t
a
n
c
e
 
(
L
e
v
e
n
s
h
t
e
i
n
)
"
 
p
l
a
y
e
r
=
{
p
E
D
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
{
m
o
d
e
T
o
g
g
l
e
}
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
S
o
u
r
c
e
 
A
"
 
v
a
l
u
e
=
{
e
d
A
}
 
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
k
i
t
t
e
n
"
,
 
v
a
l
u
e
:
 
"
k
i
t
t
e
n
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
s
u
n
d
a
y
"
,
 
v
a
l
u
e
:
 
"
s
u
n
d
a
y
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
a
b
c
"
,
 
v
a
l
u
e
:
 
"
a
b
c
"
 
}
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
 
s
e
t
E
d
A
(
v
.
s
l
i
c
e
(
0
,
 
8
)
)
}
 
/
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
T
a
r
g
e
t
 
B
"
 
v
a
l
u
e
=
{
e
d
B
}
 
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
s
i
t
t
i
n
g
"
,
 
v
a
l
u
e
:
 
"
s
i
t
t
i
n
g
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
s
a
t
u
r
d
a
y
"
,
 
v
a
l
u
e
:
 
"
s
a
t
u
r
d
a
y
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
y
a
b
d
"
,
 
v
a
l
u
e
:
 
"
y
a
b
d
"
 
}
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
 
s
e
t
E
d
B
(
v
.
s
l
i
c
e
(
0
,
 
8
)
)
}
 
/
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
P
S
E
U
D
O
_
E
D
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
v
a
l
u
e
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
{
l
e
g
e
n
d
}
{
f
r
a
m
e
 
&
&
 
<
D
P
G
r
i
d
 
f
r
a
m
e
=
{
f
r
a
m
e
}
 
r
o
w
L
a
b
e
l
s
=
{
r
o
w
L
a
b
e
l
s
}
 
c
o
l
L
a
b
e
l
s
=
{
c
o
l
L
a
b
e
l
s
}
 
/
>
}
{
f
r
a
m
e
 
&
&
 
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
f
r
a
m
e
.
m
e
s
s
a
g
e
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
}
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


 
 
i
f
 
(
m
o
d
e
 
=
=
=
 
"
k
n
a
p
"
)
 
{


 
 
 
 
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
K
N
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
 
r
o
w
L
a
b
e
l
s
 
=
 
[
"
∅
"
,
 
.
.
.
k
n
a
p
I
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
_
,
 
i
)
 
=
>
 
`
i
$
{
i
 
+
 
1
}
`
)
]
;


 
 
 
 
c
o
n
s
t
 
c
o
l
L
a
b
e
l
s
 
=
 
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
k
n
a
p
C
a
p
 
+
 
1
 
}
,
 
(
_
,
 
i
)
 
=
>
 
S
t
r
i
n
g
(
i
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
"
0
/
1
 
K
n
a
p
s
a
c
k
"
 
p
l
a
y
e
r
=
{
p
K
N
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
{
m
o
d
e
T
o
g
g
l
e
}
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
t
e
m
s
 
(
w
,
v
)
"
 
v
a
l
u
e
=
{
k
n
a
p
I
n
}
 
h
e
l
p
e
r
=
"
E
a
c
h
 
t
o
k
e
n
 
=
 
w
e
i
g
h
t
,
v
a
l
u
e
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
D
e
f
a
u
l
t
"
,
 
v
a
l
u
e
:
 
"
2
,
3
 
3
,
4
 
4
,
5
 
5
,
6
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
I
n
t
e
r
v
i
e
w
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
,
1
 
3
,
4
 
4
,
5
 
5
,
7
"
 
}
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
s
e
t
K
n
a
p
I
n
}
 
/
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
C
a
p
a
c
i
t
y
 
W
"
 
v
a
l
u
e
=
{
k
n
a
p
W
}
 
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
 
{
 
l
a
b
e
l
:
 
"
1
0
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
0
"
 
}
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
s
e
t
K
n
a
p
W
}
 
/
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
P
S
E
U
D
O
_
K
N
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
v
a
l
u
e
"
,
 
"
t
a
k
e
"
,
 
"
s
k
i
p
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
{
l
e
g
e
n
d
}
{
f
r
a
m
e
 
&
&
 
<
D
P
G
r
i
d
 
f
r
a
m
e
=
{
f
r
a
m
e
}
 
r
o
w
L
a
b
e
l
s
=
{
r
o
w
L
a
b
e
l
s
}
 
c
o
l
L
a
b
e
l
s
=
{
c
o
l
L
a
b
e
l
s
}
 
c
e
l
l
S
i
z
e
=
{
3
4
}
 
/
>
}
{
f
r
a
m
e
 
&
&
 
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
f
r
a
m
e
.
m
e
s
s
a
g
e
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
}
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
M
C
M
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
 
n
 
=
 
m
c
m
P
.
l
e
n
g
t
h
 
-
 
1
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
"
M
a
t
r
i
x
 
C
h
a
i
n
 
M
u
l
t
i
p
l
i
c
a
t
i
o
n
"
 
p
l
a
y
e
r
=
{
p
M
C
M
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
{
m
o
d
e
T
o
g
g
l
e
}
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
D
i
m
e
n
s
i
o
n
s
 
p
[
0
.
.
n
]
"
 
v
a
l
u
e
=
{
m
c
m
S
t
r
}
 
h
e
l
p
e
r
=
{
`
M
a
t
r
i
x
 
i
 
h
a
s
 
d
i
m
e
n
s
i
o
n
s
 
p
[
i
]
 
×
 
p
[
i
+
1
]
.
 
n
 
=
 
$
{
n
}
 
m
a
t
r
i
c
e
s
.
`
}
 
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
C
l
a
s
s
i
c
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
0
,
 
3
5
,
 
1
5
,
 
5
,
 
1
0
,
 
2
0
,
 
2
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
S
m
a
l
l
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
0
,
 
2
0
,
 
3
0
,
 
4
0
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
3
 
m
a
t
s
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
,
 
1
0
,
 
3
,
 
1
2
"
 
}
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
s
e
t
M
c
m
S
t
r
}
 
/
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
P
S
E
U
D
O
_
M
C
M
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
 
?
?
 
0
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
c
o
s
t
"
,
 
"
v
a
l
u
e
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
x
s
 
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
d
p
[
i
]
[
j
]
 
=
 
m
i
n
 
s
c
a
l
a
r
 
m
u
l
t
s
 
t
o
 
m
u
l
t
i
p
l
y
 
M
[
i
.
.
j
]
.
<
/
p
>


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
?
 
<
D
P
G
r
i
d
 
f
r
a
m
e
=
{
f
r
a
m
e
}
 
c
e
l
l
S
i
z
e
=
{
4
2
}
 
r
o
w
L
a
b
e
l
s
=
{
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
n
 
}
,
 
(
_
,
 
i
)
 
=
>
 
`
$
{
i
}
`
)
}
 
c
o
l
L
a
b
e
l
s
=
{
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
n
 
}
,
 
(
_
,
 
i
)
 
=
>
 
`
$
{
i
}
`
)
}
 
/
>
 
:
 
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
x
s
 
p
-
4
"
>
N
e
e
d
 
a
t
 
l
e
a
s
t
 
2
 
d
i
m
e
n
s
i
o
n
s
.
<
/
d
i
v
>
}


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
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
f
r
a
m
e
.
m
e
s
s
a
g
e
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
}


 
 
 
 
 
 
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
i
t
l
e
:
 
"
S
t
a
t
e
 
h
a
s
 
t
w
o
 
d
i
m
e
n
s
i
o
n
s
"
,
 
b
o
d
y
:
 
"
I
n
 
2
D
 
D
P
,
 
d
p
[
i
]
[
j
]
 
d
e
p
e
n
d
s
 
o
n
 
t
w
o
 
v
a
r
i
a
b
l
e
s
 
-
 
t
y
p
i
c
a
l
l
y
 
t
w
o
 
i
n
d
i
c
e
s
 
i
n
t
o
 
t
w
o
 
s
e
q
u
e
n
c
e
s
 
(
L
C
S
)
,
 
o
r
 
a
n
 
i
n
d
e
x
 
a
n
d
 
a
 
b
u
d
g
e
t
 
(
k
n
a
p
s
a
c
k
)
.
 
D
e
f
i
n
e
 
w
h
a
t
 
b
o
t
h
 
d
i
m
e
n
s
i
o
n
s
 
m
e
a
n
 
b
e
f
o
r
e
 
w
r
i
t
i
n
g
 
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
s
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
L
C
S
"
,
 
b
o
d
y
:
 
"
d
p
[
i
]
[
j
]
 
=
 
l
e
n
g
t
h
 
o
f
 
L
C
S
 
o
f
 
A
[
0
.
.
i
-
1
]
 
a
n
d
 
B
[
0
.
.
j
-
1
]
.
 
M
a
t
c
h
 
→
 
e
x
t
e
n
d
 
f
r
o
m
 
d
p
[
i
-
1
]
[
j
-
1
]
.
 
M
i
s
m
a
t
c
h
 
→
 
i
n
h
e
r
i
t
 
m
a
x
 
f
r
o
m
 
t
o
p
 
o
r
 
l
e
f
t
.
 
O
(
m
n
)
 
t
i
m
e
/
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
i
t
l
e
:
 
"
E
d
i
t
 
D
i
s
t
a
n
c
e
"
,
 
b
o
d
y
:
 
"
d
p
[
i
]
[
j
]
 
=
 
m
i
n
 
o
p
s
 
(
i
n
s
e
r
t
/
d
e
l
e
t
e
/
r
e
p
l
a
c
e
)
 
t
o
 
t
u
r
n
 
A
[
0
.
.
i
-
1
]
 
i
n
t
o
 
B
[
0
.
.
j
-
1
]
.
 
M
a
t
c
h
 
→
 
f
r
e
e
;
 
m
i
s
m
a
t
c
h
 
→
 
1
 
+
 
m
i
n
(
t
h
r
e
e
 
n
e
i
g
h
b
o
r
s
)
.
 
O
(
m
n
)
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
0
/
1
 
K
n
a
p
s
a
c
k
"
,
 
b
o
d
y
:
 
"
d
p
[
i
]
[
w
]
 
=
 
m
a
x
 
v
a
l
u
e
 
u
s
i
n
g
 
f
i
r
s
t
 
i
 
i
t
e
m
s
,
 
c
a
p
a
c
i
t
y
 
w
.
 
E
a
c
h
 
i
t
e
m
:
 
e
i
t
h
e
r
 
s
k
i
p
 
(
d
p
[
i
-
1
]
[
w
]
)
 
o
r
 
t
a
k
e
 
(
d
p
[
i
-
1
]
[
w
-
w
i
]
 
+
 
v
i
)
.
 
O
(
n
W
)
 
p
s
e
u
d
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
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
M
a
t
r
i
x
 
C
h
a
i
n
 
M
u
l
t
i
p
l
i
c
a
t
i
o
n
"
,
 
b
o
d
y
:
 
"
d
p
[
i
]
[
j
]
 
=
 
m
i
n
 
s
c
a
l
a
r
 
m
u
l
t
i
p
l
i
c
a
t
i
o
n
s
 
f
o
r
 
M
[
i
.
.
j
]
.
 
F
o
r
 
e
v
e
r
y
 
s
p
l
i
t
 
k
 
i
n
 
[
i
,
 
j
-
1
]
,
 
c
o
s
t
 
=
 
d
p
[
i
]
[
k
]
 
+
 
d
p
[
k
+
1
]
[
j
]
 
+
 
p
[
i
]
·
p
[
k
+
1
]
·
p
[
j
+
1
]
.
 
O
(
n
³
)
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
M
e
n
t
a
l
 
m
o
d
e
l
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
F
i
l
l
 
a
 
2
D
 
g
r
i
d
 
i
n
 
d
e
p
e
n
d
e
n
c
y
 
o
r
d
e
r
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


 
 
 
 
 
 
 
 
 
 
P
i
c
t
u
r
e
 
a
 
2
D
 
g
r
i
d
 
w
h
e
r
e
 
e
v
e
r
y
 
c
e
l
l
 
i
s
 
a
 
s
u
b
p
r
o
b
l
e
m
.
 
F
i
l
l
 
i
t
 
i
n
 
a
n
 
o
r
d
e
r
 
t
h
a
t
 
r
e
s
p
e
c
t
s


 
 
 
 
 
 
 
 
 
 
d
e
p
e
n
d
e
n
c
i
e
s
 
(
r
o
w
 
b
y
 
r
o
w
,
 
o
r
 
i
n
c
r
e
a
s
i
n
g
 
l
e
n
g
t
h
)
.
 
E
a
c
h
 
c
e
l
l
&
r
s
q
u
o
;
s
 
v
a
l
u
e
 
i
s
 
c
o
m
p
u
t
e
d


 
 
 
 
 
 
 
 
 
 
u
s
i
n
g
 
1
-
3
 
p
r
e
v
i
o
u
s
l
y
 
f
i
l
l
e
d
 
n
e
i
g
h
b
o
r
s
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
a
p
-
3
"
 
s
t
y
l
e
=
{
{
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
r
e
p
e
a
t
(
a
u
t
o
-
f
i
t
,
 
m
i
n
m
a
x
(
2
4
0
p
x
,
 
1
f
r
)
)
"
 
}
}
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
s
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
l
i
m
e
-
4
0
0
 
m
b
-
1
.
5
 
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
0
{
i
 
+
 
1
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
 
m
b
-
1
"
>
{
s
.
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
s
.
b
o
d
y
}
<
/
d
i
v
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
 
q
:
 
"
L
C
S
 
o
f
 
'
A
B
C
B
D
A
B
'
 
a
n
d
 
'
B
D
C
A
B
A
'
 
-
 
l
e
n
g
t
h
?
"
,
 
a
:
 
"
4
"
,
 
h
i
n
t
:
 
"
O
n
e
 
a
n
s
w
e
r
:
 
B
C
B
A
.
"
 
}
,


 
 
 
 
{
 
q
:
 
"
E
d
i
t
 
d
i
s
t
a
n
c
e
 
b
e
t
w
e
e
n
 
'
k
i
t
t
e
n
'
 
a
n
d
 
'
s
i
t
t
i
n
g
'
?
"
,
 
a
:
 
"
3
"
,
 
h
i
n
t
:
 
"
k
→
s
,
 
e
→
i
,
 
i
n
s
e
r
t
 
g
.
"
 
}
,


 
 
 
 
{
 
q
:
 
"
0
/
1
 
K
n
a
p
s
a
c
k
:
 
i
t
e
m
s
 
(
2
,
3
)
(
3
,
4
)
(
4
,
5
)
(
5
,
6
)
,
 
W
=
5
.
 
M
a
x
 
v
a
l
u
e
?
"
,
 
a
:
 
"
7
"
,
 
h
i
n
t
:
 
"
I
t
e
m
s
 
1
 
(
w
=
2
,
v
=
3
)
 
+
 
2
 
(
w
=
3
,
v
=
4
)
 
→
 
t
o
t
a
l
 
w
e
i
g
h
t
 
5
,
 
v
a
l
u
e
 
7
.
"
 
}
,


 
 
 
 
{
 
q
:
 
"
M
C
M
 
w
i
t
h
 
p
=
[
1
0
,
2
0
,
3
0
,
4
0
]
:
 
m
i
n
 
s
c
a
l
a
r
 
m
u
l
t
i
p
l
i
c
a
t
i
o
n
s
?
"
,
 
a
:
 
"
1
8
0
0
0
"
,
 
h
i
n
t
:
 
"
S
p
l
i
t
 
a
t
 
k
=
1
:
 
1
0
·
2
0
·
3
0
 
+
 
1
0
·
3
0
·
4
0
 
=
 
6
0
0
0
+
1
2
0
0
0
 
=
 
1
8
0
0
0
.
"
 
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
g
u
e
s
s
e
s
,
 
s
e
t
G
u
e
s
s
e
s
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


 
 
c
o
n
s
t
 
[
s
h
o
w
n
,
 
s
e
t
S
h
o
w
n
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
b
o
o
l
e
a
n
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
 
f
a
l
s
e
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
D
r
a
w
 
t
h
e
 
D
P
 
t
a
b
l
e
 
o
n
 
p
a
p
e
r
 
f
i
r
s
t
 
-
 
t
h
e
n
 
v
e
r
i
f
y
 
h
e
r
e
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
 
g
 
=
 
g
u
e
s
s
e
s
[
i
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
e
v
e
a
l
e
d
 
=
 
s
h
o
w
n
[
i
]
;


 
 
 
 
 
 
 
 
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
 
g
 
!
=
=
 
n
u
l
l
 
&
&
 
g
.
t
r
i
m
(
)
 
=
=
=
 
p
.
a
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
 
f
l
e
x
-
w
r
a
p
"
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
5
0
0
 
f
o
n
t
-
m
o
n
o
"
>
#
{
i
 
+
 
1
}
<
/
s
p
a
n
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
f
l
e
x
-
1
 
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
1
0
0
"
>
{
p
.
q
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
a
n
s
w
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
g
 
?
?
 
"
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
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
g
u
e
s
s
e
s
]
;
 
v
[
i
]
 
=
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
;
 
s
e
t
G
u
e
s
s
e
s
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
"
w
-
2
4
 
p
x
-
2
.
5
 
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
1
0
0
 
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
m
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
s
h
o
w
n
]
;
 
v
[
i
]
 
=
 
t
r
u
e
;
 
s
e
t
S
h
o
w
n
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
"
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
s
e
m
i
b
o
l
d
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
v
e
a
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
v
e
a
l
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{
`
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
b
o
l
d
 
p
x
-
3
 
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
-
m
d
 
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
l
i
m
e
-
5
0
0
"
 
:
 
"
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
r
o
s
e
-
5
0
0
"
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
r
r
e
c
t
 
?
 
`
✓
 
$
{
p
.
a
}
`
 
:
 
`
A
n
s
w
e
r
:
 
$
{
p
.
a
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
v
e
a
l
e
d
 
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
H
i
n
t
:
 
{
p
.
h
i
n
t
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
F
i
l
l
 
o
r
d
e
r
 
m
a
t
t
e
r
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


 
 
 
 
 
 
 
 
 
 
I
n
 
L
C
S
 
y
o
u
 
f
i
l
l
 
r
o
w
-
b
y
-
r
o
w
 
b
e
c
a
u
s
e
 
e
v
e
r
y
 
d
p
[
i
]
[
j
]
 
d
e
p
e
n
d
s
 
o
n
 
d
p
[
i
-
1
]
[
*
]
 
a
n
d
 
d
p
[
i
]
[
j
-
1
]
.


 
 
 
 
 
 
 
 
 
 
I
n
 
M
C
M
 
y
o
u
 
f
i
l
l
 
b
y
 
i
n
c
r
e
a
s
i
n
g
 
c
h
a
i
n
 
l
e
n
g
t
h
,
 
b
e
c
a
u
s
e
 
d
p
[
i
]
[
j
]
 
d
e
p
e
n
d
s
 
o
n
 
s
t
r
i
c
t
l
y
 
s
h
o
r
t
e
r
 
i
n
t
e
r
v
a
l
s
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
W
h
y
 
0
/
1
 
K
n
a
p
s
a
c
k
 
i
s
 
&
l
d
q
u
o
;
p
s
e
u
d
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
&
r
d
q
u
o
;
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


 
 
 
 
 
 
 
 
 
 
O
(
n
W
)
 
l
o
o
k
s
 
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
,
 
b
u
t
 
W
 
i
s
 
a
 
<
e
m
>
n
u
m
e
r
i
c
 
v
a
l
u
e
<
/
e
m
>
 
-
 
i
t
s
 
e
n
c
o
d
i
n
g
 
i
s
 
l
o
g
(
W
)
 
b
i
t
s
.


 
 
 
 
 
 
 
 
 
 
S
o
 
t
h
e
 
r
e
a
l
 
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
 
i
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
 
i
n
 
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
.
 
0
/
1
 
k
n
a
p
s
a
c
k
 
i
s
 
N
P
-
h
a
r
d
;


 
 
 
 
 
 
 
 
 
 
D
P
 
w
o
r
k
s
 
b
e
c
a
u
s
e
 
o
f
 
t
h
e
 
s
p
e
c
i
f
i
c
 
s
t
r
u
c
t
u
r
e
,
 
n
o
t
 
b
e
c
a
u
s
e
 
i
t
&
r
s
q
u
o
;
s
 
&
l
d
q
u
o
;
e
a
s
y
&
r
d
q
u
o
;
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
 
t
a
r
g
e
t
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
u
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
i
s
c
 
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
L
C
S
 
a
n
d
 
L
P
S
 
(
l
o
n
g
e
s
t
 
p
a
l
i
n
d
r
o
m
i
c
 
s
u
b
s
e
q
u
e
n
c
e
)
 
-
 
s
a
m
e
 
O
(
n
²
)
 
D
P
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
E
d
i
t
 
d
i
s
t
a
n
c
e
 
-
 
t
h
r
e
e
 
o
p
e
r
a
t
i
o
n
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
0
/
1
 
k
n
a
p
s
a
c
k
 
-
 
d
e
c
i
s
i
o
n
:
 
t
a
k
e
 
o
r
 
s
k
i
p
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
C
M
 
-
 
i
n
t
e
r
v
a
l
 
D
P
;
 
a
l
w
a
y
s
 
a
s
k
e
d
 
w
i
t
h
 
s
p
e
c
i
f
i
c
 
d
i
m
e
n
s
i
o
n
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
p
a
c
e
 
o
p
t
i
m
i
z
a
t
i
o
n
:
 
2
D
 
→
 
1
D
 
w
h
e
n
 
o
n
l
y
 
l
a
s
t
 
r
o
w
 
u
s
e
d
.
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
u
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
6
_
D
P
2
D
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
 
}
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
I
n
 
L
C
S
,
 
w
h
a
t
 
i
s
 
d
p
[
i
]
[
j
]
 
w
h
e
n
 
A
[
i
-
1
]
 
!
=
 
B
[
j
-
1
]
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
d
p
[
i
-
1
]
[
j
-
1
]
"
,
 
"
d
p
[
i
-
1
]
[
j
-
1
]
 
+
 
1
"
,
 
"
m
a
x
(
d
p
[
i
-
1
]
[
j
]
,
 
d
p
[
i
]
[
j
-
1
]
)
"
,
 
"
m
i
n
(
d
p
[
i
-
1
]
[
j
]
,
 
d
p
[
i
]
[
j
-
1
]
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
O
n
 
m
i
s
m
a
t
c
h
,
 
w
e
 
c
a
n
'
t
 
e
x
t
e
n
d
 
t
h
e
 
d
i
a
g
o
n
a
l
.
 
T
h
e
 
b
e
s
t
 
w
e
 
c
a
n
 
d
o
 
i
s
 
i
n
h
e
r
i
t
 
t
h
e
 
b
e
t
t
e
r
 
o
f
 
d
r
o
p
p
i
n
g
 
e
i
t
h
e
r
 
t
h
e
 
l
a
s
t
 
c
h
a
r
 
o
f
 
A
 
o
r
 
o
f
 
B
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
T
h
e
 
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
 
o
f
 
M
a
t
r
i
x
 
C
h
a
i
n
 
M
u
l
t
i
p
l
i
c
a
t
i
o
n
 
D
P
 
i
s
:
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
n
²
)
"
,
 
"
O
(
n
³
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
,
 
"
O
(
2
ⁿ
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
 
1
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
O
(
n
²
)
 
c
e
l
l
s
 
×
 
O
(
n
)
 
c
h
o
i
c
e
s
 
p
e
r
 
c
e
l
l
 
(
s
p
l
i
t
 
p
o
i
n
t
s
)
 
=
 
O
(
n
³
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
y
 
i
s
 
0
/
1
 
K
n
a
p
s
a
c
k
 
n
o
t
 
s
o
l
v
a
b
l
e
 
i
n
 
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
 
t
i
m
e
 
i
n
 
g
e
n
e
r
a
l
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
T
h
e
 
t
a
b
l
e
 
h
a
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
l
y
 
m
a
n
y
 
c
e
l
l
s
"
,


 
 
 
 
 
 
 
 
"
C
a
p
a
c
i
t
y
 
W
 
i
s
 
e
n
c
o
d
e
d
 
i
n
 
l
o
g
 
W
 
b
i
t
s
,
 
s
o
 
O
(
n
W
)
 
i
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
 
i
n
 
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
"
,


 
 
 
 
 
 
 
 
"
G
r
e
e
d
y
 
g
i
v
e
s
 
w
r
o
n
g
 
a
n
s
w
e
r
s
"
,


 
 
 
 
 
 
 
 
"
I
t
 
r
e
q
u
i
r
e
s
 
b
a
c
k
t
r
a
c
k
i
n
g
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
 
1
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
O
(
n
W
)
 
i
s
 
p
s
e
u
d
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
 
i
n
 
t
h
e
 
n
u
m
e
r
i
c
 
v
a
l
u
e
,
 
b
u
t
 
t
h
e
 
i
n
p
u
t
 
i
s
 
l
o
g
 
W
 
b
i
t
s
.
 
T
h
a
t
'
s
 
w
h
y
 
0
/
1
 
k
n
a
p
s
a
c
k
 
i
s
 
N
P
-
h
a
r
d
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
E
d
i
t
 
d
i
s
t
a
n
c
e
 
b
e
t
w
e
e
n
 
'
a
b
'
 
a
n
d
 
'
c
d
'
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
0
"
,
 
"
1
"
,
 
"
2
"
,
 
"
3
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
R
e
p
l
a
c
e
 
a
→
c
 
a
n
d
 
b
→
d
 
→
 
2
 
o
p
e
r
a
t
i
o
n
s
.
 
D
P
 
c
o
n
f
i
r
m
s
 
2
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
D
y
n
a
m
i
c
 
P
r
o
g
r
a
m
m
i
n
g
 
(
2
D
)
"


 
 
 
 
 
 
l
e
v
e
l
=
{
6
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
5
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
L
C
S
 
a
n
d
 
E
d
i
t
 
D
i
s
t
a
n
c
e
 
a
r
e
 
t
o
p
-
t
i
e
r
 
i
n
t
e
r
v
i
e
w
 
p
a
t
t
e
r
n
s
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
G
r
e
e
d
y
 
A
l
g
o
r
i
t
h
m
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


