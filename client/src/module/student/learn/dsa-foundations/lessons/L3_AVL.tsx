
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
 
t
y
p
e
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
C
e
l
l
S
t
a
t
e
 
=
 
"
i
d
l
e
"
 
|
 
"
a
c
t
i
v
e
"
 
|
 
"
c
o
m
p
a
r
e
"
 
|
 
"
d
o
n
e
"
 
|
 
"
m
i
s
m
a
t
c
h
"
;


c
o
n
s
t
 
N
O
D
E
_
F
I
L
L
:
 
R
e
c
o
r
d
<
C
e
l
l
S
t
a
t
e
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
i
d
l
e
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


 
 
a
c
t
i
v
e
:
 
T
H
E
M
E
.
a
c
c
e
n
t
,


 
 
c
o
m
p
a
r
e
:
 
"
#
f
d
e
6
8
a
"
,


 
 
d
o
n
e
:
 
T
H
E
M
E
.
a
c
c
e
n
t
D
a
r
k
,


 
 
m
i
s
m
a
t
c
h
:
 
"
#
f
c
a
5
a
5
"
,


}
;


c
o
n
s
t
 
N
O
D
E
_
T
E
X
T
:
 
R
e
c
o
r
d
<
C
e
l
l
S
t
a
t
e
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
i
d
l
e
:
 
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


 
 
a
c
t
i
v
e
:
 
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


 
 
c
o
m
p
a
r
e
:
 
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


 
 
d
o
n
e
:
 
"
#
f
f
f
"
,


 
 
m
i
s
m
a
t
c
h
:
 
"
#
7
f
1
d
1
d
"
,


}
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
 
 
A
V
L
 
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
 
A
v
l
N
o
d
e
 
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


 
 
v
a
l
u
e
:
 
n
u
m
b
e
r
;


 
 
l
e
f
t
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
;


 
 
r
i
g
h
t
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
;


 
 
h
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


}


t
y
p
e
 
A
v
l
 
=
 
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
 
A
v
l
N
o
d
e
>
;




l
e
t
 
N
E
X
T
 
=
 
1
;


f
u
n
c
t
i
o
n
 
m
k
(
v
:
 
n
u
m
b
e
r
)
:
 
A
v
l
N
o
d
e
 
{


 
 
r
e
t
u
r
n
 
{
 
i
d
:
 
`
a
$
{
N
E
X
T
+
+
}
`
,
 
v
a
l
u
e
:
 
v
,
 
l
e
f
t
:
 
n
u
l
l
,
 
r
i
g
h
t
:
 
n
u
l
l
,
 
h
e
i
g
h
t
:
 
1
 
}
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
 
a
v
l
H
(
t
:
 
A
v
l
,
 
i
d
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
)
:
 
n
u
m
b
e
r
 
{


 
 
r
e
t
u
r
n
 
i
d
 
=
=
=
 
n
u
l
l
 
?
 
0
 
:
 
t
[
i
d
]
.
h
e
i
g
h
t
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
 
a
v
l
B
F
(
t
:
 
A
v
l
,
 
i
d
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
)
:
 
n
u
m
b
e
r
 
{


 
 
r
e
t
u
r
n
 
i
d
 
=
=
=
 
n
u
l
l
 
?
 
0
 
:
 
a
v
l
H
(
t
,
 
t
[
i
d
]
.
l
e
f
t
)
 
-
 
a
v
l
H
(
t
,
 
t
[
i
d
]
.
r
i
g
h
t
)
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
 
u
p
d
a
t
e
H
(
t
:
 
A
v
l
,
 
i
d
:
 
s
t
r
i
n
g
)
 
{


 
 
t
[
i
d
]
.
h
e
i
g
h
t
 
=
 
1
 
+
 
M
a
t
h
.
m
a
x
(
a
v
l
H
(
t
,
 
t
[
i
d
]
.
l
e
f
t
)
,
 
a
v
l
H
(
t
,
 
t
[
i
d
]
.
r
i
g
h
t
)
)
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
 
c
l
o
n
e
A
v
l
(
t
:
 
A
v
l
)
:
 
A
v
l
 
{


 
 
c
o
n
s
t
 
o
:
 
A
v
l
 
=
 
{
}
;


 
 
O
b
j
e
c
t
.
v
a
l
u
e
s
(
t
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
n
)
 
=
>
 
{


 
 
 
 
o
[
n
.
i
d
]
 
=
 
{
 
.
.
.
n
 
}
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
 
r
o
t
a
t
e
R
i
g
h
t
(
t
:
 
A
v
l
,
 
y
I
d
:
 
s
t
r
i
n
g
)
:
 
s
t
r
i
n
g
 
{


 
 
c
o
n
s
t
 
y
 
=
 
t
[
y
I
d
]
;


 
 
c
o
n
s
t
 
x
I
d
 
=
 
y
.
l
e
f
t
!
;


 
 
c
o
n
s
t
 
x
 
=
 
t
[
x
I
d
]
;


 
 
c
o
n
s
t
 
T
2
 
=
 
x
.
r
i
g
h
t
;


 
 
x
.
r
i
g
h
t
 
=
 
y
I
d
;


 
 
y
.
l
e
f
t
 
=
 
T
2
;


 
 
u
p
d
a
t
e
H
(
t
,
 
y
I
d
)
;


 
 
u
p
d
a
t
e
H
(
t
,
 
x
I
d
)
;


 
 
r
e
t
u
r
n
 
x
I
d
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
 
r
o
t
a
t
e
L
e
f
t
(
t
:
 
A
v
l
,
 
x
I
d
:
 
s
t
r
i
n
g
)
:
 
s
t
r
i
n
g
 
{


 
 
c
o
n
s
t
 
x
 
=
 
t
[
x
I
d
]
;


 
 
c
o
n
s
t
 
y
I
d
 
=
 
x
.
r
i
g
h
t
!
;


 
 
c
o
n
s
t
 
y
 
=
 
t
[
y
I
d
]
;


 
 
c
o
n
s
t
 
T
2
 
=
 
y
.
l
e
f
t
;


 
 
y
.
l
e
f
t
 
=
 
x
I
d
;


 
 
x
.
r
i
g
h
t
 
=
 
T
2
;


 
 
u
p
d
a
t
e
H
(
t
,
 
x
I
d
)
;


 
 
u
p
d
a
t
e
H
(
t
,
 
y
I
d
)
;


 
 
r
e
t
u
r
n
 
y
I
d
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
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
t
r
e
e
:
 
A
v
l
;


 
 
r
o
o
t
I
d
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
;


 
 
n
o
d
e
S
t
a
t
e
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
 
C
e
l
l
S
t
a
t
e
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


 
 
r
o
t
a
t
i
o
n
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
 
i
n
s
e
r
t
(
r
o
o
t
,
 
v
)
:
"
,


 
 
"
 
 
s
t
a
n
d
a
r
d
 
B
S
T
 
i
n
s
e
r
t
"
,


 
 
"
 
 
u
p
d
a
t
e
 
h
e
i
g
h
t
(
r
o
o
t
)
"
,


 
 
"
 
 
b
f
 
<
-
 
b
a
l
a
n
c
e
F
a
c
t
o
r
(
r
o
o
t
)
"
,


 
 
"
 
 
i
f
 
b
f
 
>
 
1
 
a
n
d
 
v
 
<
 
r
o
o
t
.
l
e
f
t
.
v
a
l
u
e
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
 
r
o
t
a
t
e
R
i
g
h
t
(
r
o
o
t
)
 
 
 
#
 
L
L
"
,


 
 
"
 
 
i
f
 
b
f
 
<
 
-
1
 
a
n
d
 
v
 
>
 
r
o
o
t
.
r
i
g
h
t
.
v
a
l
u
e
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
 
r
o
t
a
t
e
L
e
f
t
(
r
o
o
t
)
 
 
 
 
#
 
R
R
"
,


 
 
"
 
 
i
f
 
b
f
 
>
 
1
 
a
n
d
 
v
 
>
 
r
o
o
t
.
l
e
f
t
.
v
a
l
u
e
:
"
,


 
 
"
 
 
 
 
r
o
o
t
.
l
e
f
t
 
<
-
 
r
o
t
a
t
e
L
e
f
t
(
r
o
o
t
.
l
e
f
t
)
;
 
r
e
t
u
r
n
 
r
o
t
a
t
e
R
i
g
h
t
(
r
o
o
t
)
 
 
#
 
L
R
"
,


 
 
"
 
 
i
f
 
b
f
 
<
 
-
1
 
a
n
d
 
v
 
<
 
r
o
o
t
.
r
i
g
h
t
.
v
a
l
u
e
:
"
,


 
 
"
 
 
 
 
r
o
o
t
.
r
i
g
h
t
 
<
-
 
r
o
t
a
t
e
R
i
g
h
t
(
r
o
o
t
.
r
i
g
h
t
)
;
 
r
e
t
u
r
n
 
r
o
t
a
t
e
L
e
f
t
(
r
o
o
t
)
 
 
#
 
R
L
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
o
o
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
 
i
n
s
e
r
t
A
v
l
(
t
:
 
A
v
l
,
 
r
o
o
t
I
d
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
,
 
v
:
 
n
u
m
b
e
r
,
 
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
)
:
 
s
t
r
i
n
g
 
{


 
 
f
u
n
c
t
i
o
n
 
r
e
c
(
n
o
d
e
I
d
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
)
:
 
s
t
r
i
n
g
 
{


 
 
 
 
i
f
 
(
n
o
d
e
I
d
 
=
=
=
 
n
u
l
l
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
n
 
=
 
m
k
(
v
)
;


 
 
 
 
 
 
t
[
n
.
i
d
]
 
=
 
n
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
 
1
,


 
 
 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
A
v
l
(
t
)
,


 
 
 
 
 
 
 
 
r
o
o
t
I
d
:
 
r
o
o
t
I
d
 
?
?
 
n
.
i
d
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
n
.
i
d
]
:
 
"
d
o
n
e
"
 
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
s
e
r
t
 
$
{
v
}
 
a
s
 
n
e
w
 
l
e
a
f
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
i
n
s
e
r
t
:
 
v
 
}
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
 
n
.
i
d
;


 
 
 
 
}


 
 
 
 
c
o
n
s
t
 
n
d
 
=
 
t
[
n
o
d
e
I
d
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
 
1
,


 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
A
v
l
(
t
)
,


 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
n
o
d
e
I
d
]
:
 
"
c
o
m
p
a
r
e
"
 
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
A
t
 
$
{
n
d
.
v
a
l
u
e
}
:
 
c
o
m
p
a
r
i
n
g
 
w
i
t
h
 
$
{
v
}
.
`
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
i
n
s
e
r
t
:
 
v
,
 
a
t
:
 
n
d
.
v
a
l
u
e
 
}
,


 
 
 
 
}
)
;


 
 
 
 
i
f
 
(
v
 
<
 
n
d
.
v
a
l
u
e
)
 
n
d
.
l
e
f
t
 
=
 
r
e
c
(
n
d
.
l
e
f
t
)
;


 
 
 
 
e
l
s
e
 
i
f
 
(
v
 
>
 
n
d
.
v
a
l
u
e
)
 
n
d
.
r
i
g
h
t
 
=
 
r
e
c
(
n
d
.
r
i
g
h
t
)
;


 
 
 
 
e
l
s
e
 
{


 
 
 
 
 
 
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
 
1
,


 
 
 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
A
v
l
(
t
)
,


 
 
 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
n
o
d
e
I
d
]
:
 
"
m
i
s
m
a
t
c
h
"
 
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
$
{
v
}
 
d
u
p
l
i
c
a
t
e
,
 
i
g
n
o
r
e
d
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
i
n
s
e
r
t
:
 
v
,
 
d
u
p
l
i
c
a
t
e
:
 
"
y
e
s
"
 
}
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
 
n
o
d
e
I
d
;


 
 
 
 
}


 
 
 
 
u
p
d
a
t
e
H
(
t
,
 
n
o
d
e
I
d
)
;


 
 
 
 
c
o
n
s
t
 
b
 
=
 
a
v
l
B
F
(
t
,
 
n
o
d
e
I
d
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
 
2
,


 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
A
v
l
(
t
)
,


 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
n
o
d
e
I
d
]
:
 
"
a
c
t
i
v
e
"
 
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
U
p
d
a
t
e
 
h
e
i
g
h
t
(
$
{
n
d
.
v
a
l
u
e
}
)
=
$
{
n
d
.
h
e
i
g
h
t
}
,
 
B
F
=
$
{
b
}
.
`
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
n
o
d
e
:
 
n
d
.
v
a
l
u
e
,
 
h
e
i
g
h
t
:
 
n
d
.
h
e
i
g
h
t
,
 
B
F
:
 
b
 
}
,


 
 
 
 
}
)
;


 
 
 
 
i
f
 
(
b
 
>
 
1
 
&
&
 
n
d
.
l
e
f
t
 
&
&
 
v
 
<
 
t
[
n
d
.
l
e
f
t
]
.
v
a
l
u
e
)
 
{


 
 
 
 
 
 
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
 
5
,


 
 
 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
A
v
l
(
t
)
,


 
 
 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
n
o
d
e
I
d
]
:
 
"
m
i
s
m
a
t
c
h
"
 
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
m
b
a
l
a
n
c
e
 
a
t
 
$
{
n
d
.
v
a
l
u
e
}
 
(
B
F
=
$
{
b
}
)
,
 
L
L
 
c
a
s
e
 
-
>
 
r
o
t
a
t
e
 
r
i
g
h
t
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
n
o
d
e
:
 
n
d
.
v
a
l
u
e
,
 
B
F
:
 
b
,
 
c
a
s
e
:
 
"
L
L
"
 
}
,


 
 
 
 
 
 
 
 
r
o
t
a
t
i
o
n
:
 
"
L
L
"
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
c
o
n
s
t
 
n
e
w
R
o
o
t
 
=
 
r
o
t
a
t
e
R
i
g
h
t
(
t
,
 
n
o
d
e
I
d
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


 
 
 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
A
v
l
(
t
)
,


 
 
 
 
 
 
 
 
r
o
o
t
I
d
:
 
r
o
o
t
I
d
 
=
=
=
 
n
o
d
e
I
d
 
?
 
n
e
w
R
o
o
t
 
:
 
r
o
o
t
I
d
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
n
e
w
R
o
o
t
]
:
 
"
d
o
n
e
"
 
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
o
t
a
t
e
d
 
r
i
g
h
t
.
 
$
{
t
[
n
e
w
R
o
o
t
]
.
v
a
l
u
e
}
 
i
s
 
n
e
w
 
s
u
b
t
r
e
e
 
r
o
o
t
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
n
o
d
e
:
 
t
[
n
e
w
R
o
o
t
]
.
v
a
l
u
e
 
}
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
 
n
e
w
R
o
o
t
;


 
 
 
 
}


 
 
 
 
i
f
 
(
b
 
<
 
-
1
 
&
&
 
n
d
.
r
i
g
h
t
 
&
&
 
v
 
>
 
t
[
n
d
.
r
i
g
h
t
]
.
v
a
l
u
e
)
 
{


 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
A
v
l
(
t
)
,


 
 
 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
n
o
d
e
I
d
]
:
 
"
m
i
s
m
a
t
c
h
"
 
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
m
b
a
l
a
n
c
e
 
a
t
 
$
{
n
d
.
v
a
l
u
e
}
 
(
B
F
=
$
{
b
}
)
,
 
R
R
 
c
a
s
e
 
-
>
 
r
o
t
a
t
e
 
l
e
f
t
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
n
o
d
e
:
 
n
d
.
v
a
l
u
e
,
 
B
F
:
 
b
,
 
c
a
s
e
:
 
"
R
R
"
 
}
,


 
 
 
 
 
 
 
 
r
o
t
a
t
i
o
n
:
 
"
R
R
"
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
c
o
n
s
t
 
n
e
w
R
o
o
t
 
=
 
r
o
t
a
t
e
L
e
f
t
(
t
,
 
n
o
d
e
I
d
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
 
8
,


 
 
 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
A
v
l
(
t
)
,


 
 
 
 
 
 
 
 
r
o
o
t
I
d
:
 
r
o
o
t
I
d
 
=
=
=
 
n
o
d
e
I
d
 
?
 
n
e
w
R
o
o
t
 
:
 
r
o
o
t
I
d
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
n
e
w
R
o
o
t
]
:
 
"
d
o
n
e
"
 
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
o
t
a
t
e
d
 
l
e
f
t
.
 
$
{
t
[
n
e
w
R
o
o
t
]
.
v
a
l
u
e
}
 
i
s
 
n
e
w
 
s
u
b
t
r
e
e
 
r
o
o
t
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
n
o
d
e
:
 
t
[
n
e
w
R
o
o
t
]
.
v
a
l
u
e
 
}
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
 
n
e
w
R
o
o
t
;


 
 
 
 
}


 
 
 
 
i
f
 
(
b
 
>
 
1
 
&
&
 
n
d
.
l
e
f
t
 
&
&
 
v
 
>
 
t
[
n
d
.
l
e
f
t
]
.
v
a
l
u
e
)
 
{


 
 
 
 
 
 
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
 
9
,


 
 
 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
A
v
l
(
t
)
,


 
 
 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
n
o
d
e
I
d
]
:
 
"
m
i
s
m
a
t
c
h
"
 
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
R
 
c
a
s
e
 
a
t
 
$
{
n
d
.
v
a
l
u
e
}
,
 
l
e
f
t
-
r
o
t
a
t
e
 
c
h
i
l
d
,
 
t
h
e
n
 
r
i
g
h
t
-
r
o
t
a
t
e
 
$
{
n
d
.
v
a
l
u
e
}
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
n
o
d
e
:
 
n
d
.
v
a
l
u
e
,
 
B
F
:
 
b
,
 
c
a
s
e
:
 
"
L
R
"
 
}
,


 
 
 
 
 
 
 
 
r
o
t
a
t
i
o
n
:
 
"
L
R
"
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
n
d
.
l
e
f
t
 
=
 
r
o
t
a
t
e
L
e
f
t
(
t
,
 
n
d
.
l
e
f
t
!
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
 
1
0
,


 
 
 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
A
v
l
(
t
)
,


 
 
 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
n
d
.
l
e
f
t
]
:
 
"
a
c
t
i
v
e
"
 
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
n
e
r
 
r
o
t
a
t
i
o
n
 
d
o
n
e
.
 
N
o
w
 
r
o
t
a
t
e
 
r
i
g
h
t
 
a
t
 
$
{
n
d
.
v
a
l
u
e
}
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
c
a
s
e
:
 
"
L
R
"
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
c
o
n
s
t
 
n
e
w
R
o
o
t
 
=
 
r
o
t
a
t
e
R
i
g
h
t
(
t
,
 
n
o
d
e
I
d
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
 
1
0
,


 
 
 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
A
v
l
(
t
)
,


 
 
 
 
 
 
 
 
r
o
o
t
I
d
:
 
r
o
o
t
I
d
 
=
=
=
 
n
o
d
e
I
d
 
?
 
n
e
w
R
o
o
t
 
:
 
r
o
o
t
I
d
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
n
e
w
R
o
o
t
]
:
 
"
d
o
n
e
"
 
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
R
 
r
o
t
a
t
i
o
n
 
c
o
m
p
l
e
t
e
.
 
N
e
w
 
s
u
b
t
r
e
e
 
r
o
o
t
:
 
$
{
t
[
n
e
w
R
o
o
t
]
.
v
a
l
u
e
}
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
n
o
d
e
:
 
t
[
n
e
w
R
o
o
t
]
.
v
a
l
u
e
 
}
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
 
n
e
w
R
o
o
t
;


 
 
 
 
}


 
 
 
 
i
f
 
(
b
 
<
 
-
1
 
&
&
 
n
d
.
r
i
g
h
t
 
&
&
 
v
 
<
 
t
[
n
d
.
r
i
g
h
t
]
.
v
a
l
u
e
)
 
{


 
 
 
 
 
 
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
 
1
1
,


 
 
 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
A
v
l
(
t
)
,


 
 
 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
n
o
d
e
I
d
]
:
 
"
m
i
s
m
a
t
c
h
"
 
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
L
 
c
a
s
e
 
a
t
 
$
{
n
d
.
v
a
l
u
e
}
,
 
r
i
g
h
t
-
r
o
t
a
t
e
 
c
h
i
l
d
,
 
t
h
e
n
 
l
e
f
t
-
r
o
t
a
t
e
 
$
{
n
d
.
v
a
l
u
e
}
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
n
o
d
e
:
 
n
d
.
v
a
l
u
e
,
 
B
F
:
 
b
,
 
c
a
s
e
:
 
"
R
L
"
 
}
,


 
 
 
 
 
 
 
 
r
o
t
a
t
i
o
n
:
 
"
R
L
"
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
n
d
.
r
i
g
h
t
 
=
 
r
o
t
a
t
e
R
i
g
h
t
(
t
,
 
n
d
.
r
i
g
h
t
!
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
 
1
2
,


 
 
 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
A
v
l
(
t
)
,


 
 
 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
n
d
.
r
i
g
h
t
]
:
 
"
a
c
t
i
v
e
"
 
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
n
e
r
 
r
o
t
a
t
i
o
n
 
d
o
n
e
.
 
N
o
w
 
r
o
t
a
t
e
 
l
e
f
t
 
a
t
 
$
{
n
d
.
v
a
l
u
e
}
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
c
a
s
e
:
 
"
R
L
"
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
c
o
n
s
t
 
n
e
w
R
o
o
t
 
=
 
r
o
t
a
t
e
L
e
f
t
(
t
,
 
n
o
d
e
I
d
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
 
1
2
,


 
 
 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
A
v
l
(
t
)
,


 
 
 
 
 
 
 
 
r
o
o
t
I
d
:
 
r
o
o
t
I
d
 
=
=
=
 
n
o
d
e
I
d
 
?
 
n
e
w
R
o
o
t
 
:
 
r
o
o
t
I
d
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
n
e
w
R
o
o
t
]
:
 
"
d
o
n
e
"
 
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
L
 
r
o
t
a
t
i
o
n
 
c
o
m
p
l
e
t
e
.
 
N
e
w
 
s
u
b
t
r
e
e
 
r
o
o
t
:
 
$
{
t
[
n
e
w
R
o
o
t
]
.
v
a
l
u
e
}
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
n
o
d
e
:
 
t
[
n
e
w
R
o
o
t
]
.
v
a
l
u
e
 
}
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
 
n
e
w
R
o
o
t
;


 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
n
o
d
e
I
d
;


 
 
}


 
 
r
e
t
u
r
n
 
r
e
c
(
r
o
o
t
I
d
)
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
 
p
a
r
s
e
A
r
r
(
s
:
 
s
t
r
i
n
g
)
:
 
n
u
m
b
e
r
[
]
 
|
 
n
u
l
l
 
{


 
 
c
o
n
s
t
 
p
 
=
 
s


 
 
 
 
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
 
x
.
t
r
i
m
(
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
B
o
o
l
e
a
n
)


 
 
 
 
.
m
a
p
(
N
u
m
b
e
r
)
;


 
 
i
f
 
(
p
.
s
o
m
e
(
(
n
)
 
=
>
 
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
n
)
)
)
 
r
e
t
u
r
n
 
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
 
p
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
 
b
u
i
l
d
F
r
a
m
e
s
(
v
a
l
u
e
s
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


 
 
N
E
X
T
 
=
 
1
;


 
 
c
o
n
s
t
 
t
:
 
A
v
l
 
=
 
{
}
;


 
 
l
e
t
 
r
o
o
t
I
d
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


 
 
 
 
t
r
e
e
:
 
{
}
,


 
 
 
 
r
o
o
t
I
d
:
 
n
u
l
l
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
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
m
p
t
y
 
A
V
L
.
 
I
n
s
e
r
t
i
n
g
:
 
[
$
{
v
a
l
u
e
s
.
j
o
i
n
(
"
,
 
"
)
}
]
.
`
,


 
 
 
 
v
a
r
s
:
 
{
 
p
e
n
d
i
n
g
:
 
v
a
l
u
e
s
.
l
e
n
g
t
h
 
}
,


 
 
}
)
;


 
 
f
o
r
 
(
c
o
n
s
t
 
v
 
o
f
 
v
a
l
u
e
s
)
 
{


 
 
 
 
r
o
o
t
I
d
 
=
 
i
n
s
e
r
t
A
v
l
(
t
,
 
r
o
o
t
I
d
,
 
v
,
 
f
r
a
m
e
s
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
 
1
3
,


 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
A
v
l
(
t
)
,


 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(


 
 
 
 
 
 
 
 
O
b
j
e
c
t
.
k
e
y
s
(
t
)
.
m
a
p
(
(
k
)
 
=
>
 
[
k
,
 
"
d
o
n
e
"
 
a
s
 
C
e
l
l
S
t
a
t
e
]
)
,


 
 
 
 
 
 
)
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
A
f
t
e
r
 
i
n
s
e
r
t
i
n
g
 
$
{
v
}
.
 
H
e
i
g
h
t
=
$
{
r
o
o
t
I
d
 
?
 
t
[
r
o
o
t
I
d
]
.
h
e
i
g
h
t
 
:
 
0
}
.
`
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
i
n
s
e
r
t
e
d
:
 
v
,
 
h
e
i
g
h
t
:
 
r
o
o
t
I
d
 
?
 
t
[
r
o
o
t
I
d
]
.
h
e
i
g
h
t
 
:
 
0
 
}
,


 
 
 
 
}
)
;


 
 
}


 
 
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
 
 
L
o
c
a
l
 
A
V
L
 
S
V
G
 
v
i
s
u
a
l
i
z
e
r
 
w
i
t
h
 
B
F
 
l
a
b
e
l
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
c
o
m
p
u
t
e
A
v
l
L
a
y
o
u
t
(


 
 
t
:
 
A
v
l
,


 
 
r
o
o
t
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
,


)
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
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
 
}
>
 
{


 
 
c
o
n
s
t
 
p
o
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
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
 
}
>
 
=
 
{
}
;


 
 
l
e
t
 
c
o
l
 
=
 
0
;


 
 
f
u
n
c
t
i
o
n
 
w
a
l
k
(
i
d
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
,
 
d
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
)
 
{


 
 
 
 
i
f
 
(
!
i
d
 
|
|
 
!
t
[
i
d
]
)
 
r
e
t
u
r
n
;


 
 
 
 
w
a
l
k
(
t
[
i
d
]
.
l
e
f
t
,
 
d
e
p
t
h
 
+
 
1
)
;


 
 
 
 
p
o
s
[
i
d
]
 
=
 
{
 
x
:
 
c
o
l
+
+
,
 
y
:
 
d
e
p
t
h
 
}
;


 
 
 
 
w
a
l
k
(
t
[
i
d
]
.
r
i
g
h
t
,
 
d
e
p
t
h
 
+
 
1
)
;


 
 
}


 
 
w
a
l
k
(
r
o
o
t
,
 
0
)
;


 
 
r
e
t
u
r
n
 
p
o
s
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
 
A
v
l
T
r
e
e
V
i
z
(
{


 
 
t
r
e
e
,


 
 
r
o
o
t
I
d
,


 
 
n
o
d
e
S
t
a
t
e
s
,


 
 
w
i
d
t
h
 
=
 
6
0
0
,


 
 
h
e
i
g
h
t
 
=
 
3
2
0
,


}
:
 
{


 
 
t
r
e
e
:
 
A
v
l
;


 
 
r
o
o
t
I
d
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
;


 
 
n
o
d
e
S
t
a
t
e
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
 
C
e
l
l
S
t
a
t
e
>
;


 
 
w
i
d
t
h
?
:
 
n
u
m
b
e
r
;


 
 
h
e
i
g
h
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
)
 
{


 
 
c
o
n
s
t
 
p
o
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
 
c
o
m
p
u
t
e
A
v
l
L
a
y
o
u
t
(
t
r
e
e
,
 
r
o
o
t
I
d
)
,
 
[
t
r
e
e
,
 
r
o
o
t
I
d
]
)
;


 
 
c
o
n
s
t
 
n
 
=
 
O
b
j
e
c
t
.
k
e
y
s
(
p
o
s
)
.
l
e
n
g
t
h
;


 
 
i
f
 
(
n
 
=
=
=
 
0
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
s
v
g
 
w
i
d
t
h
=
{
w
i
d
t
h
}
 
h
e
i
g
h
t
=
{
6
0
}
 
v
i
e
w
B
o
x
=
{
`
0
 
0
 
$
{
w
i
d
t
h
}
 
6
0
`
}
>


 
 
 
 
 
 
 
 
<
t
e
x
t


 
 
 
 
 
 
 
 
 
 
x
=
{
w
i
d
t
h
 
/
 
2
}


 
 
 
 
 
 
 
 
 
 
y
=
{
3
5
}


 
 
 
 
 
 
 
 
 
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"


 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
=
{
1
3
}


 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
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
M
u
t
e
d
}


 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
h
e
a
d
i
n
g
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
(
e
m
p
t
y
 
t
r
e
e
)


 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
<
/
s
v
g
>


 
 
 
 
)
;


 
 
}


 
 
c
o
n
s
t
 
P
A
D
 
=
 
3
6
;


 
 
c
o
n
s
t
 
x
S
c
a
l
e
 
=
 
n
 
>
 
1
 
?
 
(
w
i
d
t
h
 
-
 
P
A
D
 
*
 
2
)
 
/
 
(
n
 
-
 
1
)
 
:
 
0
;


 
 
c
o
n
s
t
 
m
a
x
D
 
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
 
.
.
.
O
b
j
e
c
t
.
v
a
l
u
e
s
(
p
o
s
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
 
p
.
y
)
)
;


 
 
c
o
n
s
t
 
y
S
c
a
l
e
 
=
 
m
a
x
D
 
>
 
0
 
?
 
(
h
e
i
g
h
t
 
-
 
P
A
D
 
*
 
2
 
-
 
3
0
)
 
/
 
m
a
x
D
 
:
 
0
;


 
 
c
o
n
s
t
 
R
 
=
 
1
8
;


 
 
c
o
n
s
t
 
p
x
 
=
 
(
i
d
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
 
P
A
D
 
+
 
p
o
s
[
i
d
]
.
x
 
*
 
x
S
c
a
l
e
;


 
 
c
o
n
s
t
 
p
y
 
=
 
(
i
d
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
 
P
A
D
 
+
 
p
o
s
[
i
d
]
.
y
 
*
 
y
S
c
a
l
e
;


 
 
c
o
n
s
t
 
i
d
s
 
=
 
O
b
j
e
c
t
.
k
e
y
s
(
t
r
e
e
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
i
d
)
 
=
>
 
p
o
s
[
i
d
]
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
s
v
g


 
 
 
 
 
 
v
i
e
w
B
o
x
=
{
`
0
 
0
 
$
{
w
i
d
t
h
}
 
$
{
h
e
i
g
h
t
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
w
-
f
u
l
l
"


 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
h
e
i
g
h
t
:
 
"
a
u
t
o
"
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
:
 
h
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
d
s
.
m
a
p
(
(
i
d
)
 
=
>


 
 
 
 
 
 
 
 
(
[
t
r
e
e
[
i
d
]
.
l
e
f
t
,
 
t
r
e
e
[
i
d
]
.
r
i
g
h
t
]
.
f
i
l
t
e
r
(
B
o
o
l
e
a
n
)
 
a
s
 
s
t
r
i
n
g
[
]
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
c
i
d
)
 
=
>
 
p
o
s
[
c
i
d
]
)


 
 
 
 
 
 
 
 
 
 
.
m
a
p
(
(
c
i
d
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
`
$
{
i
d
}
-
$
{
c
i
d
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
p
x
(
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
1
=
{
p
y
(
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
p
x
(
c
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
2
=
{
p
y
(
c
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
8
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
)
)
,


 
 
 
 
 
 
)
}


 
 
 
 
 
 
{
i
d
s
.
m
a
p
(
(
i
d
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
t
a
t
e
 
=
 
n
o
d
e
S
t
a
t
e
s
[
i
d
]
 
?
?
 
"
i
d
l
e
"
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
f
 
=
 
a
v
l
B
F
(
t
r
e
e
,
 
i
d
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
g
 
k
e
y
=
{
i
d
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
x
=
{
p
x
(
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
y
=
{
p
y
(
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
R
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
N
O
D
E
_
F
I
L
L
[
s
t
a
t
e
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
s
t
a
t
e
 
=
=
=
 
"
a
c
t
i
v
e
"
 
|
|
 
s
t
a
t
e
 
=
=
=
 
"
d
o
n
e
"
 
?
 
T
H
E
M
E
.
a
c
c
e
n
t
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
b
o
r
d
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
W
i
d
t
h
=
{
s
t
a
t
e
 
=
=
=
 
"
a
c
t
i
v
e
"
 
|
|
 
s
t
a
t
e
 
=
=
=
 
"
d
o
n
e
"
 
?
 
2
.
5
 
:
 
1
.
5
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
p
x
(
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
p
y
(
i
d
)
 
+
 
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
=
{
1
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
=
{
7
0
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
N
O
D
E
_
T
E
X
T
[
s
t
a
t
e
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
m
o
n
o
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
r
e
e
[
i
d
]
.
v
a
l
u
e
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
p
x
(
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
p
y
(
i
d
)
 
+
 
R
 
+
 
1
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
=
{
9
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
M
a
t
h
.
a
b
s
(
b
f
)
 
>
 
1
 
?
 
"
#
d
c
2
6
2
6
"
 
:
 
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
M
u
t
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
m
o
n
o
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
B
F
=
{
b
f
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
<
/
s
v
g
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
i
n
p
u
t
,
 
s
e
t
I
n
p
u
t
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
 
2
0
,
 
4
0
,
 
1
0
,
 
2
5
,
 
3
5
,
 
5
0
,
 
5
"
)
;


 
 
c
o
n
s
t
 
p
a
r
s
e
d
 
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
 
p
a
r
s
e
A
r
r
(
i
n
p
u
t
)
 
?
?
 
[
3
0
,
 
2
0
,
 
4
0
,
 
1
0
,
 
2
5
,
 
3
5
,
 
5
0
,
 
5
]
,


 
 
 
 
[
i
n
p
u
t
]
,


 
 
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
 
b
u
i
l
d
F
r
a
m
e
s
(
p
a
r
s
e
d
)
,
 
[
p
a
r
s
e
d
]
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
A
V
L
 
I
n
s
e
r
t
i
o
n
 
w
i
t
h
 
R
o
t
a
t
i
o
n
s
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
s
e
r
t
 
s
e
q
u
e
n
c
e
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
 
1
0
,
 
2
0
,
 
3
0
 
-
>
 
t
r
i
g
g
e
r
s
 
L
L
"


 
 
 
 
 
 
 
 
 
 
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
 
i
n
s
e
r
t
 
s
h
o
w
s
 
B
F
 
u
p
d
a
t
e
 
a
n
d
 
a
n
y
 
r
o
t
a
t
i
o
n
.
 
B
F
 
s
h
o
w
n
 
u
n
d
e
r
 
e
a
c
h
 
n
o
d
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
L
L
 
r
o
t
a
t
i
o
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
3
0
,
 
2
0
,
 
1
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
R
R
 
r
o
t
a
t
i
o
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
1
0
,
 
2
0
,
 
3
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
L
R
 
r
o
t
a
t
i
o
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
3
0
,
 
1
0
,
 
2
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
R
L
 
r
o
t
a
t
i
o
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
1
0
,
 
3
0
,
 
2
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
M
i
x
e
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
3
0
,
 
2
0
,
 
4
0
,
 
1
0
,
 
2
5
,
 
3
5
,
 
5
0
,
 
5
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


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
p
a
r
s
e
A
r
r
(
v
)
)
 
s
e
t
I
n
p
u
t
(
v
)
;


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
/
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
"
>


 
 
 
 
 
 
 
 
<
A
v
l
T
r
e
e
V
i
z


 
 
 
 
 
 
 
 
 
 
t
r
e
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
t
r
e
e
 
?
?
 
{
}
}


 
 
 
 
 
 
 
 
 
 
r
o
o
t
I
d
=
{
f
r
a
m
e
?
.
r
o
o
t
I
d
 
?
?
 
n
u
l
l
}


 
 
 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
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
n
o
d
e
S
t
a
t
e
s
 
?
?
 
{
}
}


 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
6
0
0
}


 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
=
{
3
2
0
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
{
f
r
a
m
e
?
.
r
o
t
a
t
i
o
n
 
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
p
x
-
4
 
p
y
-
2
 
b
o
r
d
e
r
-
2
 
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
4
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
s
m
 
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
r
o
s
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
r
o
s
e
-
3
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
r
o
t
a
t
i
o
n
}
 
r
o
t
a
t
i
o
n


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
B
F
 
&
g
t
;
 
1
 
=
 
l
e
f
t
-
h
e
a
v
y
 
·
 
B
F
 
&
l
t
;
 
-
1
 
=
 
r
i
g
h
t
-
h
e
a
v
y
 
·
 
|
B
F
|
 
&
l
e
;
 
1
 
=
 
b
a
l
a
n
c
e
d
 
·
 
e
a
c
h
 
n
o
d
e
 
s
h
o
w
s
 
B
F


 
 
 
 
 
 
 
 
<
/
d
i
v
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
e
p
 
t
h
r
o
u
g
h
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
 
i
t
e
m
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
B
a
l
a
n
c
e
 
f
a
c
t
o
r
 
(
B
F
)
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
B
F
(
n
o
d
e
)
 
=
 
h
e
i
g
h
t
(
l
e
f
t
)
 
-
 
h
e
i
g
h
t
(
r
i
g
h
t
)
.
 
A
n
 
A
V
L
 
t
r
e
e
 
k
e
e
p
s
 
|
B
F
|
 
<
=
 
1
 
a
t
 
e
v
e
r
y
 
n
o
d
e
.
 
I
f
 
a
n
 
i
n
s
e
r
t
i
o
n
 
b
r
e
a
k
s
 
t
h
a
t
,
 
w
e
 
r
o
t
a
t
e
.
"
,


 
 
 
 
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
F
o
u
r
 
r
o
t
a
t
i
o
n
 
c
a
s
e
s
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
L
L
,
 
R
R
,
 
L
R
,
 
R
L
,
 
n
a
m
e
d
 
a
f
t
e
r
 
w
h
e
r
e
 
t
h
e
 
n
e
w
 
v
a
l
u
e
 
w
e
n
t
.
 
L
L
 
a
n
d
 
R
R
 
a
r
e
 
s
i
n
g
l
e
 
r
o
t
a
t
i
o
n
s
.
 
L
R
 
a
n
d
 
R
L
 
a
r
e
 
d
o
u
b
l
e
 
(
t
w
o
 
s
i
n
g
l
e
 
r
o
t
a
t
i
o
n
s
 
s
t
a
c
k
e
d
)
.
"
,


 
 
 
 
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
W
h
y
 
O
(
l
o
g
 
n
)
 
i
s
 
g
u
a
r
a
n
t
e
e
d
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
H
e
i
g
h
t
 
o
f
 
a
n
 
A
V
L
 
w
i
t
h
 
n
 
n
o
d
e
s
 
i
s
 
O
(
l
o
g
 
n
)
,
 
f
o
r
m
a
l
l
y
 
h
 
<
=
 
1
.
4
4
 
*
 
l
o
g
2
(
n
+
2
)
.
 
S
o
 
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
s
e
a
r
c
h
 
a
r
e
 
a
l
l
 
s
t
r
i
c
t
l
y
 
O
(
l
o
g
 
n
)
 
u
n
l
i
k
e
 
p
l
a
i
n
 
B
S
T
.
"
,


 
 
 
 
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
I
n
s
e
r
t
 
c
o
s
t
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
S
t
a
n
d
a
r
d
 
B
S
T
 
i
n
s
e
r
t
 
(
O
(
l
o
g
 
n
)
)
 
+
 
p
o
s
s
i
b
l
y
 
o
n
e
 
r
o
t
a
t
i
o
n
 
f
i
x
 
w
a
l
k
 
u
p
 
(
O
(
l
o
g
 
n
)
)
.
 
D
e
l
e
t
e
 
m
a
y
 
t
r
i
g
g
e
r
 
O
(
l
o
g
 
n
)
 
r
o
t
a
t
i
o
n
s
 
a
l
o
n
g
 
t
h
e
 
p
a
t
h
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
w
h
y
 
A
V
L
 
e
x
i
s
t
s
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
S
e
l
f
-
b
a
l
a
n
c
i
n
g
 
t
h
r
o
u
g
h
 
l
o
c
a
l
 
r
o
t
a
t
i
o
n
s
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


 
 
 
 
 
 
 
 
 
 
A
 
p
l
a
i
n
 
B
S
T
 
c
a
n
 
d
e
g
e
n
e
r
a
t
e
 
t
o
 
a
 
c
h
a
i
n
.
 
A
V
L
 
r
e
p
a
i
r
s
 
i
m
b
a
l
a
n
c
e
 
i
m
m
e
d
i
a
t
e
l
y
 
u
s
i
n
g
 
l
o
c
a
l


 
 
 
 
 
 
 
 
 
 
r
o
t
a
t
i
o
n
s
,
 
s
m
a
l
l
 
O
(
1
)
 
p
o
i
n
t
e
r
 
s
u
r
g
e
r
i
e
s
 
t
h
a
t
 
p
r
e
s
e
r
v
e
 
t
h
e
 
B
S
T
 
i
n
v
a
r
i
a
n
t
 
w
h
i
l
e
 
k
e
e
p
i
n
g


 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
 
l
o
g
a
r
i
t
h
m
i
c
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
 
m
b
-
2
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
s
.
b
o
d
y
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
I
n
s
e
r
t
 
1
0
,
2
0
,
3
0
 
i
n
t
o
 
e
m
p
t
y
 
A
V
L
.
 
W
h
i
c
h
 
r
o
t
a
t
i
o
n
?
"
,
 
a
:
 
"
R
R
"
 
}
,


 
 
 
 
{
 
q
:
 
"
I
n
s
e
r
t
 
3
0
,
2
0
,
1
0
 
i
n
t
o
 
e
m
p
t
y
 
A
V
L
.
 
W
h
i
c
h
 
r
o
t
a
t
i
o
n
?
"
,
 
a
:
 
"
L
L
"
 
}
,


 
 
 
 
{
 
q
:
 
"
I
n
s
e
r
t
 
3
0
,
1
0
,
2
0
 
i
n
t
o
 
e
m
p
t
y
 
A
V
L
.
 
W
h
i
c
h
 
r
o
t
a
t
i
o
n
?
"
,
 
a
:
 
"
L
R
"
 
}
,


 
 
 
 
{
 
q
:
 
"
F
i
n
a
l
 
r
o
o
t
 
a
f
t
e
r
 
i
n
s
e
r
t
i
n
g
 
1
0
,
2
0
,
3
0
?
"
,
 
a
:
 
"
2
0
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
,
 
s
e
t
G
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
,
 
s
e
t
S
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
F
i
g
u
r
e
 
o
u
t
 
t
h
e
 
r
o
t
a
t
i
o
n
 
t
y
p
e
 
b
y
 
l
o
o
k
i
n
g
 
a
t
 
t
h
e
 
p
a
t
h
 
t
o
 
t
h
e
 
n
e
w
 
v
a
l
u
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
v
 
=
 
(
g
[
i
]
 
?
?
 
"
"
)
.
t
r
i
m
(
)
.
t
o
U
p
p
e
r
C
a
s
e
(
)
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
v
 
=
=
=
 
p
.
a
.
t
o
U
p
p
e
r
C
a
s
e
(
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
4
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
0
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
 
f
l
e
x
-
1
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
e
.
g
.
 
L
L
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
g
[
i
]
 
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
x
s
 
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
e
d
i
u
m
 
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
s
[
i
]
 
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
4
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
4
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
C
o
r
r
e
c
t
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
R
o
t
a
t
i
o
n
s
 
p
r
e
s
e
r
v
e
 
i
n
o
r
d
e
r
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


 
 
 
 
 
 
 
 
 
 
K
e
y
 
i
n
s
i
g
h
t
:
 
l
e
f
t
 
a
n
d
 
r
i
g
h
t
 
r
o
t
a
t
i
o
n
s
 
<
e
m
>
n
e
v
e
r
 
c
h
a
n
g
e
 
t
h
e
 
i
n
o
r
d
e
r
 
s
e
q
u
e
n
c
e
<
/
e
m
>
.
 
T
h
a
t
 
i
s


 
 
 
 
 
 
 
 
 
 
w
h
y
 
t
h
e
y
 
p
r
e
s
e
r
v
e
 
t
h
e
 
B
S
T
 
i
n
v
a
r
i
a
n
t
 
f
o
r
 
f
r
e
e
.
 
T
h
e
 
s
a
m
e
 
i
d
e
a
 
p
o
w
e
r
s
 
A
V
L
,
 
R
e
d
-
B
l
a
c
k
 
t
r
e
e
s
,


 
 
 
 
 
 
 
 
 
 
a
n
d
 
s
p
l
a
y
 
t
r
e
e
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
A
V
L
 
v
s
 
R
e
d
-
B
l
a
c
k
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


 
 
 
 
 
 
 
 
 
 
A
V
L
 
i
s
 
s
t
r
i
c
t
e
r
 
(
|
B
F
|
 
&
l
e
;
 
1
)
 
s
o
 
l
o
o
k
u
p
s
 
a
r
e
 
a
 
h
a
i
r
 
f
a
s
t
e
r
.
 
R
e
d
-
B
l
a
c
k
 
i
s
 
l
o
o
s
e
r
 
s
o
 
i
t
 
d
o
e
s


 
 
 
 
 
 
 
 
 
 
f
e
w
e
r
 
r
o
t
a
t
i
o
n
s
 
o
n
 
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
.
 
R
e
s
u
l
t
:
 
R
B
 
d
o
m
i
n
a
t
e
s
 
l
a
n
g
u
a
g
e
 
s
t
d
-
l
i
b
s
 
(
C
+
+
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
<
c
o
d
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
x
s
 
b
g
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
g
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
 
p
x
-
1
 
r
o
u
n
d
e
d
"
>
m
a
p
<
/
c
o
d
e
>


 
 
 
 
 
 
 
 
 
 
,
 
J
a
v
a
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
<
c
o
d
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
x
s
 
b
g
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
g
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
 
p
x
-
1
 
r
o
u
n
d
e
d
"
>
T
r
e
e
M
a
p
<
/
c
o
d
e
>


 
 
 
 
 
 
 
 
 
 
)
 
w
h
i
l
e
 
A
V
L
 
a
p
p
e
a
r
s
 
i
n
 
d
a
t
a
b
a
s
e
s
 
w
h
e
r
e
 
r
e
a
d
s
 
d
o
m
i
n
a
t
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
M
i
n
i
m
u
m
 
n
o
d
e
s
 
f
o
r
 
h
e
i
g
h
t
 
h
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


 
 
 
 
 
 
 
 
 
 
N
(
h
)
 
=
 
N
(
h
-
1
)
 
+
 
N
(
h
-
2
)
 
+
 
1
,
 
t
h
i
s
 
i
s
 
t
h
e
 
F
i
b
o
n
a
c
c
i
-
l
i
k
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
 
b
e
h
i
n
d
 
t
h
e
 
t
i
g
h
t


 
 
 
 
 
 
 
 
 
 
1
.
4
4
 
*
 
l
o
g
 
b
o
u
n
d
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
 
d
e
r
i
v
a
t
i
o
n
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
e
s
s
o
n
 
e
x
p
o
r
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
3
_
A
V
L
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
,


 
 
 
 
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
n
 
A
V
L
 
t
r
e
e
 
r
e
q
u
i
r
e
s
 
|
B
F
|
 
<
=
 
1
 
a
t
 
e
v
e
r
y
 
n
o
d
e
.
 
B
F
 
i
s
 
d
e
f
i
n
e
d
 
a
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
h
e
i
g
h
t
(
r
i
g
h
t
)
 
-
 
h
e
i
g
h
t
(
l
e
f
t
)
"
,


 
 
 
 
 
 
 
 
"
h
e
i
g
h
t
(
l
e
f
t
)
 
-
 
h
e
i
g
h
t
(
r
i
g
h
t
)
"
,


 
 
 
 
 
 
 
 
"
n
u
m
b
e
r
 
o
f
 
l
e
a
v
e
s
"
,


 
 
 
 
 
 
 
 
"
d
e
p
t
h
 
o
f
 
t
h
e
 
n
o
d
e
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
S
t
a
n
d
a
r
d
 
c
o
n
v
e
n
t
i
o
n
:
 
B
F
(
n
)
 
=
 
h
(
l
e
f
t
)
 
-
 
h
(
r
i
g
h
t
)
.
 
P
o
s
i
t
i
v
e
 
-
>
 
l
e
f
t
-
h
e
a
v
y
,
 
n
e
g
a
t
i
v
e
 
-
>
 
r
i
g
h
t
-
h
e
a
v
y
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
A
n
 
L
R
 
d
o
u
b
l
e
-
r
o
t
a
t
i
o
n
 
c
o
n
s
i
s
t
s
 
o
f
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
T
w
o
 
r
i
g
h
t
 
r
o
t
a
t
i
o
n
s
"
,


 
 
 
 
 
 
 
 
"
O
n
e
 
r
i
g
h
t
 
t
h
e
n
 
o
n
e
 
l
e
f
t
 
r
o
t
a
t
i
o
n
 
a
t
 
t
h
e
 
s
a
m
e
 
n
o
d
e
"
,


 
 
 
 
 
 
 
 
"
A
 
l
e
f
t
 
r
o
t
a
t
i
o
n
 
a
t
 
t
h
e
 
l
e
f
t
 
c
h
i
l
d
,
 
t
h
e
n
 
a
 
r
i
g
h
t
 
r
o
t
a
t
i
o
n
 
a
t
 
t
h
e
 
n
o
d
e
"
,


 
 
 
 
 
 
 
 
"
A
 
r
i
g
h
t
 
r
o
t
a
t
i
o
n
 
o
n
l
y
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
L
R
:
 
f
i
r
s
t
 
r
o
t
a
t
e
 
t
h
e
 
l
e
f
t
 
c
h
i
l
d
 
l
e
f
t
 
(
c
o
n
v
e
r
t
s
 
t
o
 
L
L
 
s
h
a
p
e
)
,
 
t
h
e
n
 
r
o
t
a
t
e
 
t
h
e
 
r
o
o
t
 
r
i
g
h
t
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
a
x
i
m
u
m
 
h
e
i
g
h
t
 
o
f
 
a
n
 
A
V
L
 
t
r
e
e
 
w
i
t
h
 
7
 
n
o
d
e
s
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
2
"
,
 
"
3
"
,
 
"
4
"
,
 
"
6
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
M
i
n
i
m
u
m
 
n
o
d
e
s
 
f
o
r
 
h
e
i
g
h
t
 
3
 
i
s
 
N
(
3
)
 
=
 
N
(
2
)
+
N
(
1
)
+
1
 
=
 
4
+
2
+
1
 
=
 
7
.
 
S
o
 
7
 
n
o
d
e
s
 
c
a
n
 
f
i
t
 
i
n
 
a
n
 
A
V
L
 
o
f
 
h
e
i
g
h
t
 
3
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
 
a
r
e
 
r
o
t
a
t
i
o
n
s
 
O
(
1
)
 
e
v
e
n
 
t
h
o
u
g
h
 
t
h
e
y
 
r
e
b
a
l
a
n
c
e
 
t
h
e
 
t
r
e
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
T
h
e
y
 
c
o
p
y
 
t
h
e
 
w
h
o
l
e
 
s
u
b
t
r
e
e
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
o
n
l
y
 
r
e
-
w
i
r
e
 
a
 
c
o
n
s
t
a
n
t
 
n
u
m
b
e
r
 
o
f
 
p
o
i
n
t
e
r
s
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
s
o
r
t
 
t
h
e
 
n
o
d
e
s
 
f
i
r
s
t
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
r
e
l
y
 
o
n
 
l
e
v
e
l
-
o
r
d
e
r
 
t
r
a
v
e
r
s
a
l
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
A
 
r
o
t
a
t
i
o
n
 
s
w
a
p
s
 
3
 
p
o
i
n
t
e
r
s
 
l
o
c
a
l
l
y
.
 
T
h
e
 
h
e
i
g
h
t
 
f
i
x
-
u
p
 
i
s
 
a
l
s
o
 
c
o
n
s
t
a
n
t
-
w
o
r
k
 
p
e
r
 
n
o
d
e
 
o
n
 
t
h
e
 
p
a
t
h
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
A
V
L
 
T
r
e
e
s
"


 
 
 
 
 
 
l
e
v
e
l
=
{
3
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
B
a
l
a
n
c
e
d
 
t
r
e
e
s
 
p
o
w
e
r
 
s
t
d
:
:
m
a
p
,
 
T
r
e
e
M
a
p
 
a
n
d
 
D
B
 
i
n
d
e
x
e
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
R
e
d
-
B
l
a
c
k
 
T
r
e
e
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


