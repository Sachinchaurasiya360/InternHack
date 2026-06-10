
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


 
 
C
o
d
e
B
l
o
c
k
,


 
 
I
n
l
i
n
e
C
o
d
e
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
 
"
s
t
r
i
n
g
-
m
a
t
c
h
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
 
 
C
e
l
l
 
s
t
a
t
e
 
t
y
p
e
s
 
f
o
r
 
i
n
l
i
n
e
 
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
d
e
f
a
u
l
t
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
m
a
t
c
h
"
 
|
 
"
w
i
n
d
o
w
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
v
i
s
i
t
e
d
"
 
|
 
"
s
w
a
p
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
;




c
o
n
s
t
 
S
T
A
T
E
_
C
O
L
O
R
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


 
 
d
e
f
a
u
l
t
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
 
"
r
g
b
a
(
5
9
,
1
3
0
,
2
4
6
,
0
.
1
8
)
"
,


 
 
m
a
t
c
h
:
 
"
r
g
b
a
(
1
6
,
1
8
5
,
1
2
9
,
0
.
1
8
)
"
,


 
 
w
i
n
d
o
w
:
 
"
r
g
b
a
(
1
3
9
,
9
2
,
2
4
6
,
0
.
1
0
)
"
,


 
 
d
o
n
e
:
 
"
r
g
b
a
(
1
6
3
,
2
3
0
,
5
3
,
0
.
1
5
)
"
,


 
 
v
i
s
i
t
e
d
:
 
"
r
g
b
a
(
1
2
0
,
1
1
3
,
1
0
8
,
0
.
1
2
)
"
,


 
 
s
w
a
p
:
 
"
r
g
b
a
(
2
4
5
,
1
5
8
,
1
1
,
0
.
1
8
)
"
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
r
g
b
a
(
2
4
5
,
1
5
8
,
1
1
,
0
.
1
8
)
"
,


}
;




c
o
n
s
t
 
S
T
A
T
E
_
B
O
R
D
E
R
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


 
 
d
e
f
a
u
l
t
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
,


 
 
a
c
t
i
v
e
:
 
"
#
3
b
8
2
f
6
"
,


 
 
m
a
t
c
h
:
 
"
#
1
0
b
9
8
1
"
,


 
 
w
i
n
d
o
w
:
 
"
#
8
b
5
c
f
6
"
,


 
 
d
o
n
e
:
 
"
#
a
3
e
6
3
5
"
,


 
 
v
i
s
i
t
e
d
:
 
"
#
7
8
7
1
6
c
"
,


 
 
s
w
a
p
:
 
"
#
f
5
9
e
0
b
"
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
5
9
e
0
b
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
 
 
I
n
l
i
n
e
 
s
t
r
i
n
g
-
c
e
l
l
 
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
 
S
t
r
i
n
g
C
e
l
l
s
(
{


 
 
v
a
l
u
e
s
,


 
 
s
t
a
t
e
s
,


 
 
p
o
i
n
t
e
r
s
,


 
 
c
e
l
l
W
i
d
t
h
 
=
 
3
6
,


}
:
 
{


 
 
v
a
l
u
e
s
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


 
 
s
t
a
t
e
s
:
 
C
e
l
l
S
t
a
t
e
[
]
;


 
 
p
o
i
n
t
e
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
 
n
u
m
b
e
r
>
;


 
 
c
e
l
l
W
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


}
)
 
{


 
 
c
o
n
s
t
 
p
t
r
B
y
I
d
x
:
 
R
e
c
o
r
d
<
n
u
m
b
e
r
,
 
s
t
r
i
n
g
[
]
>
 
=
 
{
}
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
 
[
n
a
m
e
,
 
i
d
x
]
 
o
f
 
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
p
o
i
n
t
e
r
s
)
)
 
{


 
 
 
 
i
f
 
(
!
p
t
r
B
y
I
d
x
[
i
d
x
]
)
 
p
t
r
B
y
I
d
x
[
i
d
x
]
 
=
 
[
]
;


 
 
 
 
p
t
r
B
y
I
d
x
[
i
d
x
]
.
p
u
s
h
(
n
a
m
e
)
;


 
 
}


 
 
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
 
p
b
-
6
 
r
e
l
a
t
i
v
e
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
W
i
d
t
h
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
 
*
 
(
c
e
l
l
W
i
d
t
h
 
+
 
4
)
 
}
}
>


 
 
 
 
 
 
 
 
{
v
a
l
u
e
s
.
m
a
p
(
(
v
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
t
 
=
 
s
t
a
t
e
s
[
i
]
 
?
?
 
"
d
e
f
a
u
l
t
"
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
t
r
s
 
=
 
p
t
r
B
y
I
d
x
[
i
]
 
?
?
 
[
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
1
 
r
e
l
a
t
i
v
e
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
:
 
c
e
l
l
W
i
d
t
h
 
}
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
"
 
s
t
y
l
e
=
{
{
 
l
i
n
e
H
e
i
g
h
t
:
 
1
 
}
}
>
{
i
}
<
/
s
p
a
n
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
 
r
o
u
n
d
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
c
e
l
l
W
i
d
t
h
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
:
 
c
e
l
l
W
i
d
t
h
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
S
T
A
T
E
_
C
O
L
O
R
[
s
t
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
$
{
s
t
 
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
 
=
=
=
 
"
m
a
t
c
h
"
 
?
 
2
 
:
 
1
}
p
x
 
s
o
l
i
d
 
$
{
S
T
A
T
E
_
B
O
R
D
E
R
[
s
t
]
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
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
:
 
"
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
 
0
.
2
s
,
 
b
o
r
d
e
r
-
c
o
l
o
r
 
0
.
2
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
t
r
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
 
-
b
o
t
t
o
m
-
5
 
l
e
f
t
-
0
 
r
i
g
h
t
-
0
 
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
5
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
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
t
r
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
 
 
Z
-
a
l
g
o
r
i
t
h
m
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
Z
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
:
 
s
t
r
i
n
g
;


 
 
z
:
 
n
u
m
b
e
r
[
]
;


 
 
l
:
 
n
u
m
b
e
r
;


 
 
r
:
 
n
u
m
b
e
r
;


 
 
i
:
 
n
u
m
b
e
r
;


 
 
s
t
a
t
e
s
:
 
C
e
l
l
S
t
a
t
e
[
]
;


 
 
p
o
i
n
t
e
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
 
n
u
m
b
e
r
>
;


 
 
f
l
a
s
h
K
e
y
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
 
Z
_
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
 
Z
(
s
)
:
"
,


 
 
"
 
 
n
 
←
 
l
e
n
(
s
)
;
 
z
[
0
]
 
←
 
0
"
,


 
 
"
 
 
l
 
←
 
r
 
←
 
0
 
 
 
#
 
c
u
r
r
e
n
t
 
Z
-
b
o
x
 
[
l
,
 
r
)
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
-
1
:
"
,


 
 
"
 
 
 
 
i
f
 
i
 
<
 
r
:
"
,


 
 
"
 
 
 
 
 
 
z
[
i
]
 
←
 
m
i
n
(
r
 
-
 
i
,
 
z
[
i
 
-
 
l
]
)
 
 
 
 
#
 
r
e
u
s
e
 
p
r
e
c
o
m
p
u
t
e
d
"
,


 
 
"
 
 
 
 
w
h
i
l
e
 
i
 
+
 
z
[
i
]
 
<
 
n
 
a
n
d
 
s
[
z
[
i
]
]
 
=
=
 
s
[
i
 
+
 
z
[
i
]
]
:
"
,


 
 
"
 
 
 
 
 
 
z
[
i
]
 
+
=
 
1
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
#
 
e
x
t
e
n
d
 
b
r
u
t
e
-
f
o
r
c
e
"
,


 
 
"
 
 
 
 
i
f
 
i
 
+
 
z
[
i
]
 
>
 
r
:
"
,


 
 
"
 
 
 
 
 
 
l
 
←
 
i
;
 
r
 
←
 
i
 
+
 
z
[
i
]
 
 
 
 
 
 
 
 
 
 
 
 
 
 
#
 
u
p
d
a
t
e
 
Z
-
b
o
x
"
,


 
 
"
 
 
r
e
t
u
r
n
 
z
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
Z
F
r
a
m
e
s
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
 
Z
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
 
f
:
 
Z
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
E
m
p
t
y
 
s
t
r
i
n
g
.
"
,


 
 
 
 
 
 
s
,
 
z
:
 
[
]
,
 
l
:
 
0
,
 
r
:
 
0
,
 
i
:
 
-
1
,


 
 
 
 
 
 
s
t
a
t
e
s
:
 
[
]
,
 
p
o
i
n
t
e
r
s
:
 
{
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
 
f
;


 
 
}


 
 
c
o
n
s
t
 
z
 
=
 
n
e
w
 
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
;


 
 
l
e
t
 
l
 
=
 
0
,
 
r
 
=
 
0
;


 
 
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
O
f
 
=
 
(
c
i
:
 
n
u
m
b
e
r
,
 
c
l
:
 
n
u
m
b
e
r
,
 
c
r
:
 
n
u
m
b
e
r
,
 
m
a
t
c
h
e
s
:
 
n
u
m
b
e
r
)
:
 
C
e
l
l
S
t
a
t
e
[
]
 
=
>
 
{


 
 
 
 
r
e
t
u
r
n
 
s
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
.
m
a
p
(
(
_
,
 
i
d
x
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
i
d
x
 
=
=
=
 
c
i
)
 
r
e
t
u
r
n
 
"
a
c
t
i
v
e
"
;


 
 
 
 
 
 
i
f
 
(
i
d
x
 
>
=
 
c
i
 
&
&
 
i
d
x
 
<
 
c
i
 
+
 
m
a
t
c
h
e
s
)
 
r
e
t
u
r
n
 
"
m
a
t
c
h
"
;


 
 
 
 
 
 
i
f
 
(
i
d
x
 
>
=
 
c
l
 
&
&
 
i
d
x
 
<
 
c
r
)
 
r
e
t
u
r
n
 
"
w
i
n
d
o
w
"
;


 
 
 
 
 
 
r
e
t
u
r
n
 
"
d
e
f
a
u
l
t
"
;


 
 
 
 
}
)
;


 
 
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
 
s
:
 
`
"
$
{
s
}
"
`
 
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
u
t
e
 
Z
-
a
r
r
a
y
 
f
o
r
 
"
$
{
s
}
"
.
 
z
[
i
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
 
l
o
n
g
e
s
t
 
s
u
b
s
t
r
i
n
g
 
s
t
a
r
t
i
n
g
 
a
t
 
i
 
t
h
a
t
 
m
a
t
c
h
e
s
 
a
 
p
r
e
f
i
x
 
o
f
 
s
.
`
,


 
 
 
 
s
,
 
z
:
 
[
.
.
.
z
]
,
 
l
,
 
r
,
 
i
:
 
0
,


 
 
 
 
s
t
a
t
e
s
:
 
s
t
a
t
e
O
f
(
-
1
,
 
0
,
 
0
,
 
0
)
,
 
p
o
i
n
t
e
r
s
:
 
{
}
,


 
 
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
 
n
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
 
l
,
 
r
,
 
"
z
[
i
]
"
:
 
z
[
i
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
i
 
=
 
$
{
i
}
.
 
C
u
r
r
e
n
t
 
Z
-
b
o
x
 
=
 
[
$
{
l
}
,
 
$
{
r
}
)
.
`
,


 
 
 
 
 
 
s
,
 
z
:
 
[
.
.
.
z
]
,
 
l
,
 
r
,
 
i
,


 
 
 
 
 
 
s
t
a
t
e
s
:
 
s
t
a
t
e
O
f
(
i
,
 
l
,
 
r
,
 
0
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
l
,
 
r
:
 
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
 
r
 
-
 
1
)
 
}
,


 
 
 
 
}
)
;


 
 
 
 
i
f
 
(
i
 
<
 
r
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
r
e
u
s
e
 
=
 
M
a
t
h
.
m
i
n
(
r
 
-
 
i
,
 
z
[
i
 
-
 
l
]
)
;


 
 
 
 
 
 
z
[
i
]
 
=
 
r
e
u
s
e
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
 
5
,
 
v
a
r
s
:
 
{
 
i
,
 
"
i
-
l
"
:
 
i
 
-
 
l
,
 
"
z
[
i
-
l
]
"
:
 
z
[
i
 
-
 
l
]
,
 
"
r
-
i
"
:
 
r
 
-
 
i
,
 
"
z
[
i
]
 
n
e
w
"
:
 
r
e
u
s
e
 
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
i
 
<
 
r
.
 
R
e
u
s
e
 
z
[
i
-
l
]
 
=
 
z
[
$
{
i
 
-
 
l
}
]
 
=
 
$
{
z
[
i
 
-
 
l
]
}
,
 
c
a
p
p
e
d
 
b
y
 
r
-
i
 
=
 
$
{
r
 
-
 
i
}
 
→
 
z
[
$
{
i
}
]
 
=
 
$
{
r
e
u
s
e
}
.
`
,


 
 
 
 
 
 
 
 
s
,
 
z
:
 
[
.
.
.
z
]
,
 
l
,
 
r
,
 
i
,


 
 
 
 
 
 
 
 
s
t
a
t
e
s
:
 
s
t
a
t
e
O
f
(
i
,
 
l
,
 
r
,
 
z
[
i
]
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
l
,
 
r
:
 
r
 
-
 
1
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
z
[
i
]
 
n
e
w
"
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}


 
 
 
 
l
e
t
 
e
x
t
e
n
d
e
d
 
=
 
0
;


 
 
 
 
w
h
i
l
e
 
(
i
 
+
 
z
[
i
]
 
<
 
n
 
&
&
 
s
[
z
[
i
]
]
 
=
=
=
 
s
[
i
 
+
 
z
[
i
]
]
)
 
{


 
 
 
 
 
 
z
[
i
]
+
+
;


 
 
 
 
 
 
e
x
t
e
n
d
e
d
+
+
;


 
 
 
 
}


 
 
 
 
i
f
 
(
e
x
t
e
n
d
e
d
 
>
 
0
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
 
"
z
[
i
]
"
:
 
z
[
i
]
,
 
e
x
t
e
n
d
e
d
 
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
B
r
u
t
e
-
f
o
r
c
e
 
e
x
t
e
n
s
i
o
n
:
 
m
a
t
c
h
e
d
 
$
{
e
x
t
e
n
d
e
d
}
 
m
o
r
e
 
c
h
a
r
$
{
e
x
t
e
n
d
e
d
 
=
=
=
 
1
 
?
 
"
"
 
:
 
"
s
"
}
.
 
z
[
$
{
i
}
]
 
=
 
$
{
z
[
i
]
}
.
`
,


 
 
 
 
 
 
 
 
s
,
 
z
:
 
[
.
.
.
z
]
,
 
l
,
 
r
,
 
i
,


 
 
 
 
 
 
 
 
s
t
a
t
e
s
:
 
s
t
a
t
e
O
f
(
i
,
 
l
,
 
r
,
 
z
[
i
]
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
z
[
i
]
"
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}
 
e
l
s
e
 
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
 
"
z
[
i
]
"
:
 
z
[
i
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
 
f
u
r
t
h
e
r
 
m
a
t
c
h
.
 
z
[
$
{
i
}
]
 
s
t
a
y
s
 
a
t
 
$
{
z
[
i
]
}
.
`
,


 
 
 
 
 
 
 
 
s
,
 
z
:
 
[
.
.
.
z
]
,
 
l
,
 
r
,
 
i
,


 
 
 
 
 
 
 
 
s
t
a
t
e
s
:
 
s
t
a
t
e
O
f
(
i
,
 
l
,
 
r
,
 
z
[
i
]
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}


 
 
 
 
i
f
 
(
i
 
+
 
z
[
i
]
 
>
 
r
)
 
{


 
 
 
 
 
 
l
 
=
 
i
;
 
r
 
=
 
i
 
+
 
z
[
i
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
 
8
,
 
v
a
r
s
:
 
{
 
l
,
 
r
 
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
e
w
 
Z
-
b
o
x
:
 
[
$
{
l
}
,
 
$
{
r
}
)
.
 
F
u
t
u
r
e
 
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
h
i
s
 
r
a
n
g
e
 
c
a
n
 
r
e
u
s
e
 
t
h
i
s
 
w
o
r
k
.
`
,


 
 
 
 
 
 
 
 
s
,
 
z
:
 
[
.
.
.
z
]
,
 
l
,
 
r
,
 
i
,


 
 
 
 
 
 
 
 
s
t
a
t
e
s
:
 
s
t
a
t
e
O
f
(
i
,
 
l
,
 
r
,
 
z
[
i
]
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
,
 
r
:
 
r
 
-
 
1
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
l
"
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}


 
 
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
 
0
,
 
v
a
r
s
:
 
{
 
z
:
 
`
[
$
{
z
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
`
 
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
 
Z
-
a
r
r
a
y
 
=
 
[
$
{
z
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
 
T
o
t
a
l
 
w
o
r
k
 
O
(
n
)
,
 
e
a
c
h
 
c
h
a
r
a
c
t
e
r
 
i
s
 
v
i
s
i
t
e
d
 
a
t
 
m
o
s
t
 
t
w
i
c
e
.
`
,


 
 
 
 
s
,
 
z
:
 
[
.
.
.
z
]
,
 
l
,
 
r
,
 
i
:
 
n
 
-
 
1
,


 
 
 
 
s
t
a
t
e
s
:
 
s
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
.
m
a
p
(
(
)
 
=
>
 
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
)
,
 
p
o
i
n
t
e
r
s
:
 
{
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
 
 
M
a
n
a
c
h
e
r
'
s
 
a
l
g
o
r
i
t
h
m
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
M
a
n
a
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


 
 
T
:
 
s
t
r
i
n
g
;


 
 
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
;


 
 
C
:
 
n
u
m
b
e
r
;


 
 
R
:
 
n
u
m
b
e
r
;


 
 
i
:
 
n
u
m
b
e
r
;


 
 
s
t
a
t
e
s
:
 
C
e
l
l
S
t
a
t
e
[
]
;


 
 
p
o
i
n
t
e
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
 
n
u
m
b
e
r
>
;


 
 
f
l
a
s
h
K
e
y
?
:
 
s
t
r
i
n
g
;


 
 
b
e
s
t
C
e
n
t
e
r
?
:
 
n
u
m
b
e
r
;


 
 
b
e
s
t
R
a
d
i
u
s
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




c
o
n
s
t
 
M
A
N
A
_
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
 
m
a
n
a
c
h
e
r
(
s
)
:
"
,


 
 
"
 
 
T
 
←
 
'
#
'
 
+
 
i
n
t
e
r
l
e
a
v
e
(
s
,
 
'
#
'
)
"
,


 
 
"
 
 
n
 
←
 
l
e
n
(
T
)
;
 
p
 
←
 
a
r
r
a
y
 
o
f
 
z
e
r
o
s
"
,


 
 
"
 
 
C
 
←
 
0
;
 
R
 
←
 
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
-
2
:
"
,


 
 
"
 
 
 
 
m
i
r
r
o
r
 
←
 
2
C
 
-
 
i
"
,


 
 
"
 
 
 
 
i
f
 
i
 
<
 
R
:
 
p
[
i
]
 
←
 
m
i
n
(
R
 
-
 
i
,
 
p
[
m
i
r
r
o
r
]
)
 
 
 
 
#
 
r
e
f
l
e
c
t
"
,


 
 
"
 
 
 
 
w
h
i
l
e
 
T
[
i
 
+
 
p
[
i
]
 
+
 
1
]
 
=
=
 
T
[
i
 
-
 
p
[
i
]
 
-
 
1
]
:
"
,


 
 
"
 
 
 
 
 
 
p
[
i
]
 
+
=
 
1
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
#
 
e
x
p
a
n
d
"
,


 
 
"
 
 
 
 
i
f
 
i
 
+
 
p
[
i
]
 
>
 
R
:
 
C
 
←
 
i
;
 
R
 
←
 
i
 
+
 
p
[
i
]
 
 
 
 
 
 
 
 
#
 
u
p
d
a
t
e
"
,


 
 
"
 
 
r
e
t
u
r
n
 
m
a
x
(
p
)
 
→
 
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
e
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
 
m
a
n
a
T
r
a
n
s
f
o
r
m
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
 
s
t
r
i
n
g
 
{


 
 
r
e
t
u
r
n
 
"
^
#
"
 
+
 
s
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
.
j
o
i
n
(
"
#
"
)
 
+
 
"
#
$
"
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
M
a
n
a
c
h
e
r
F
r
a
m
e
s
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
 
M
a
n
a
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
 
T
 
=
 
m
a
n
a
T
r
a
n
s
f
o
r
m
(
s
)
;


 
 
c
o
n
s
t
 
n
 
=
 
T
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
 
p
 
=
 
n
e
w
 
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
;


 
 
l
e
t
 
C
 
=
 
0
,
 
R
 
=
 
0
;


 
 
c
o
n
s
t
 
f
:
 
M
a
n
a
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
t
e
O
f
 
=
 
(
i
:
 
n
u
m
b
e
r
,
 
c
u
r
R
:
 
n
u
m
b
e
r
,
 
h
l
?
:
 
{
 
m
i
r
r
o
r
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
:
 
C
e
l
l
S
t
a
t
e
[
]
 
=
>
 
{


 
 
 
 
r
e
t
u
r
n
 
T
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
.
m
a
p
(
(
_
,
 
i
d
x
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
h
l
?
.
m
i
r
r
o
r
 
=
=
=
 
i
d
x
)
 
r
e
t
u
r
n
 
"
c
o
m
p
a
r
e
"
;


 
 
 
 
 
 
i
f
 
(
i
d
x
 
=
=
=
 
i
)
 
r
e
t
u
r
n
 
"
a
c
t
i
v
e
"
;


 
 
 
 
 
 
i
f
 
(
i
d
x
 
>
=
 
i
 
-
 
p
[
i
]
 
&
&
 
i
d
x
 
<
=
 
i
 
+
 
p
[
i
]
)
 
r
e
t
u
r
n
 
"
m
a
t
c
h
"
;


 
 
 
 
 
 
i
f
 
(
i
d
x
 
<
=
 
c
u
r
R
)
 
r
e
t
u
r
n
 
"
w
i
n
d
o
w
"
;


 
 
 
 
 
 
r
e
t
u
r
n
 
"
d
e
f
a
u
l
t
"
;


 
 
 
 
}
)
;


 
 
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
:
 
0
,
 
v
a
r
s
:
 
{
 
s
:
 
`
"
$
{
s
}
"
`
,
 
T
:
 
`
"
$
{
T
}
"
`
 
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
n
a
c
h
e
r
'
s
 
o
n
 
"
$
{
s
}
"
.
 
T
r
a
n
s
f
o
r
m
:
 
i
n
s
e
r
t
 
'
#
'
 
b
e
t
w
e
e
n
 
e
v
e
r
y
 
c
h
a
r
.
`
,


 
 
 
 
T
,
 
p
:
 
[
.
.
.
p
]
,
 
C
,
 
R
,
 
i
:
 
0
,


 
 
 
 
s
t
a
t
e
s
:
 
T
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
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
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
)
,
 
p
o
i
n
t
e
r
s
:
 
{
}
,


 
 
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
 
n
 
-
 
1
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
 
m
i
r
r
o
r
 
=
 
2
 
*
 
C
 
-
 
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
 
5
,
 
v
a
r
s
:
 
{
 
i
,
 
m
i
r
r
o
r
,
 
C
,
 
R
 
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
i
 
=
 
$
{
i
}
.
 
M
i
r
r
o
r
 
a
c
r
o
s
s
 
C
=
$
{
C
}
:
 
2
C
-
i
 
=
 
$
{
m
i
r
r
o
r
}
.
`
,


 
 
 
 
 
 
T
,
 
p
:
 
[
.
.
.
p
]
,
 
C
,
 
R
,
 
i
,


 
 
 
 
 
 
s
t
a
t
e
s
:
 
s
t
a
t
e
O
f
(
i
,
 
R
,
 
{
 
m
i
r
r
o
r
 
}
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
m
i
r
r
o
r
,
 
C
,
 
R
 
}
,


 
 
 
 
}
)
;


 
 
 
 
i
f
 
(
i
 
<
 
R
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
r
e
u
s
e
 
=
 
M
a
t
h
.
m
i
n
(
R
 
-
 
i
,
 
p
[
m
i
r
r
o
r
]
)
;


 
 
 
 
 
 
p
[
i
]
 
=
 
r
e
u
s
e
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
 
"
p
[
m
i
r
r
o
r
]
"
:
 
p
[
m
i
r
r
o
r
]
,
 
"
R
-
i
"
:
 
R
 
-
 
i
,
 
"
p
[
i
]
 
n
e
w
"
:
 
p
[
i
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
i
 
<
 
R
 
→
 
r
e
u
s
e
 
p
[
m
i
r
r
o
r
=
$
{
m
i
r
r
o
r
}
]
 
=
 
$
{
p
[
m
i
r
r
o
r
]
}
,
 
c
a
p
p
e
d
 
b
y
 
R
-
i
 
=
 
$
{
R
 
-
 
i
}
 
→
 
p
[
$
{
i
}
]
 
=
 
$
{
p
[
i
]
}
.
`
,


 
 
 
 
 
 
 
 
T
,
 
p
:
 
[
.
.
.
p
]
,
 
C
,
 
R
,
 
i
,


 
 
 
 
 
 
 
 
s
t
a
t
e
s
:
 
s
t
a
t
e
O
f
(
i
,
 
R
,
 
{
 
m
i
r
r
o
r
 
}
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
m
i
r
r
o
r
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
p
[
i
]
 
n
e
w
"
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}


 
 
 
 
l
e
t
 
e
x
p
a
n
d
e
d
 
=
 
0
;


 
 
 
 
w
h
i
l
e
 
(
T
[
i
 
+
 
p
[
i
]
 
+
 
1
]
 
=
=
=
 
T
[
i
 
-
 
p
[
i
]
 
-
 
1
]
)
 
{


 
 
 
 
 
 
p
[
i
]
+
+
;


 
 
 
 
 
 
e
x
p
a
n
d
e
d
+
+
;


 
 
 
 
}


 
 
 
 
i
f
 
(
e
x
p
a
n
d
e
d
 
>
 
0
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
 
7
,
 
v
a
r
s
:
 
{
 
i
,
 
e
x
p
a
n
d
e
d
,
 
"
p
[
i
]
"
:
 
p
[
i
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
x
p
a
n
d
 
$
{
e
x
p
a
n
d
e
d
}
 
s
t
e
p
$
{
e
x
p
a
n
d
e
d
 
=
=
=
 
1
 
?
 
"
"
 
:
 
"
s
"
}
.
 
p
[
$
{
i
}
]
 
=
 
$
{
p
[
i
]
}
.
`
,


 
 
 
 
 
 
 
 
T
,
 
p
:
 
[
.
.
.
p
]
,
 
C
,
 
R
,
 
i
,


 
 
 
 
 
 
 
 
s
t
a
t
e
s
:
 
s
t
a
t
e
O
f
(
i
,
 
R
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
p
[
i
]
"
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}


 
 
 
 
i
f
 
(
i
 
+
 
p
[
i
]
 
>
 
R
)
 
{


 
 
 
 
 
 
C
 
=
 
i
;
 
R
 
=
 
i
 
+
 
p
[
i
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
 
9
,
 
v
a
r
s
:
 
{
 
C
,
 
R
 
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
P
a
l
i
n
d
r
o
m
e
 
a
t
 
i
=
$
{
i
}
 
e
x
t
e
n
d
s
 
p
a
s
t
 
R
 
→
 
u
p
d
a
t
e
 
c
e
n
t
e
r
 
C
=
$
{
C
}
,
 
R
=
$
{
R
}
.
`
,


 
 
 
 
 
 
 
 
T
,
 
p
:
 
[
.
.
.
p
]
,
 
C
,
 
R
,
 
i
,


 
 
 
 
 
 
 
 
s
t
a
t
e
s
:
 
s
t
a
t
e
O
f
(
i
,
 
R
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
C
,
 
R
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
C
"
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}


 
 
}


 
 
l
e
t
 
b
e
s
t
I
 
=
 
0
,
 
b
e
s
t
R
a
d
 
=
 
0
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
 
n
;
 
i
+
+
)
 
i
f
 
(
p
[
i
]
 
>
 
b
e
s
t
R
a
d
)
 
{
 
b
e
s
t
R
a
d
 
=
 
p
[
i
]
;
 
b
e
s
t
I
 
=
 
i
;
 
}


 
 
c
o
n
s
t
 
s
t
a
r
t
I
n
T
 
=
 
b
e
s
t
I
 
-
 
b
e
s
t
R
a
d
;


 
 
c
o
n
s
t
 
s
t
a
r
t
I
n
S
 
=
 
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
s
t
a
r
t
I
n
T
 
/
 
2
)
;


 
 
c
o
n
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
e
 
=
 
s
.
s
u
b
s
t
r
(
s
t
a
r
t
I
n
S
,
 
b
e
s
t
R
a
d
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
 
0
,
 
v
a
r
s
:
 
{
 
l
o
n
g
e
s
t
P
a
l
i
n
d
r
o
m
e
:
 
`
"
$
{
p
a
l
i
n
d
r
o
m
e
}
"
`
,
 
l
e
n
g
t
h
:
 
b
e
s
t
R
a
d
 
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
 
L
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
t
r
i
n
g
 
=
 
"
$
{
p
a
l
i
n
d
r
o
m
e
}
"
 
(
l
e
n
g
t
h
 
$
{
b
e
s
t
R
a
d
}
)
.
`
,


 
 
 
 
T
,
 
p
:
 
[
.
.
.
p
]
,
 
C
,
 
R
,
 
i
:
 
n
 
-
 
1
,


 
 
 
 
s
t
a
t
e
s
:
 
T
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
.
m
a
p
(
(
_
,
 
i
d
x
)
 
=
>
 
i
d
x
 
>
=
 
b
e
s
t
I
 
-
 
b
e
s
t
R
a
d
 
&
&
 
i
d
x
 
<
=
 
b
e
s
t
I
 
+
 
b
e
s
t
R
a
d
 
?
 
"
m
a
t
c
h
"
 
:
 
"
v
i
s
i
t
e
d
"
)
,


 
 
 
 
p
o
i
n
t
e
r
s
:
 
{
 
c
e
n
t
e
r
:
 
b
e
s
t
I
 
}
,


 
 
 
 
b
e
s
t
C
e
n
t
e
r
:
 
b
e
s
t
I
,
 
b
e
s
t
R
a
d
i
u
s
:
 
b
e
s
t
R
a
d
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
 
 
V
i
s
u
a
l
i
z
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
 
V
i
z
M
o
d
e
 
=
 
"
z
"
 
|
 
"
m
a
n
a
c
h
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
 
Z
V
i
z
(
)
 
{


 
 
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
(
"
a
a
b
c
a
a
b
x
a
a
a
z
"
)
;


 
 
c
o
n
s
t
 
s
C
a
p
p
e
d
 
=
 
s
.
s
l
i
c
e
(
0
,
 
1
8
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
Z
F
r
a
m
e
s
(
s
C
a
p
p
e
d
)
,
 
[
s
C
a
p
p
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
{
`
Z
-
a
r
r
a
y
 
o
f
 
"
$
{
s
C
a
p
p
e
d
}
"
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
 
s
t
r
i
n
g
"


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
}


 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
U
p
 
t
o
 
1
8
 
c
h
a
r
s
.
 
W
a
t
c
h
 
t
h
e
 
Z
-
b
o
x
 
[
l
,
 
r
)
 
g
e
t
 
r
e
u
s
e
d
,
 
e
a
c
h
 
c
h
a
r
 
v
i
s
i
t
e
d
 
a
t
 
m
o
s
t
 
t
w
i
c
e
 
→
 
O
(
n
)
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
a
a
b
c
a
a
b
x
a
a
a
z
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
a
b
c
a
a
b
x
a
a
a
z
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
a
a
a
a
 
(
m
a
x
 
r
e
u
s
e
)
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
a
a
a
a
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
a
c
a
b
a
 
(
p
a
l
i
n
d
r
o
m
e
)
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
a
c
a
b
a
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
d
e
f
 
(
n
o
 
m
a
t
c
h
)
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
d
e
f
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
s
e
t
S
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
Z
_
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
f
r
a
m
e
?
.
f
l
a
s
h
K
e
y
 
?
 
[
f
r
a
m
e
.
f
l
a
s
h
K
e
y
]
 
:
 
[
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
4
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
 
t
e
x
t
-
x
s
"
>


 
 
 
 
 
 
 
 
 
 
<
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
b
l
u
e
-
5
0
0
"
>
b
l
u
e
<
/
s
p
a
n
>
 
=
 
c
u
r
r
e
n
t
 
i
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
e
m
e
r
a
l
d
-
5
0
0
"
>
g
r
e
e
n
<
/
s
p
a
n
>
 
=
 
m
a
t
c
h
e
d
 
(
z
[
i
]
 
c
h
a
r
s
)
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
v
i
o
l
e
t
-
5
0
0
"
>
p
u
r
p
l
e
<
/
s
p
a
n
>
 
=
 
c
u
r
r
e
n
t
 
Z
-
b
o
x
 
[
l
,
 
r
)
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


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
t
r
i
n
g
C
e
l
l
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
s
=
{
f
r
a
m
e
.
s
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
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
.
s
t
a
t
e
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
o
i
n
t
e
r
s
=
{
f
r
a
m
e
.
p
o
i
n
t
e
r
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
e
l
l
W
i
d
t
h
=
{
3
6
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
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
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Z
-
a
r
r
a
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
l
e
x
 
g
a
p
-
1
 
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
f
r
a
m
e
.
z
.
m
a
p
(
(
v
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
:
 
3
6
,
 
h
e
i
g
h
t
:
 
3
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
i
d
x
 
=
=
=
 
f
r
a
m
e
.
i
 
?
 
"
2
p
x
 
s
o
l
i
d
 
#
3
b
8
2
f
6
"
 
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
d
x
 
=
=
=
 
f
r
a
m
e
.
i
 
?
 
"
r
g
b
a
(
5
9
,
1
3
0
,
2
4
6
,
0
.
1
2
)
"
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
 
l
e
a
d
i
n
g
-
n
o
n
e
"
>
{
i
d
x
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
"
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
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
 
}
}
>
{
v
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
d
i
v
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
C
a
r
d
>


 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
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




f
u
n
c
t
i
o
n
 
M
a
n
a
V
i
z
(
)
 
{


 
 
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
(
"
b
a
b
a
d
"
)
;


 
 
c
o
n
s
t
 
s
C
a
p
p
e
d
 
=
 
s
.
s
l
i
c
e
(
0
,
 
1
4
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
M
a
n
a
c
h
e
r
F
r
a
m
e
s
(
s
C
a
p
p
e
d
)
,
 
[
s
C
a
p
p
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
{
`
M
a
n
a
c
h
e
r
 
o
n
 
"
$
{
s
C
a
p
p
e
d
}
"
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
 
s
t
r
i
n
g
"


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
}


 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
U
p
 
t
o
 
1
4
 
c
h
a
r
s
.
 
T
h
e
 
t
r
a
n
s
f
o
r
m
 
i
n
s
e
r
t
s
 
'
#
'
 
s
o
 
e
v
e
n
/
o
d
d
 
p
a
l
i
n
d
r
o
m
e
s
 
a
r
e
 
h
a
n
d
l
e
d
 
u
n
i
f
o
r
m
l
y
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
b
a
b
a
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
b
a
b
a
d
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
c
b
b
d
 
(
e
v
e
n
)
"
,
 
v
a
l
u
e
:
 
"
c
b
b
d
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
a
c
a
b
a
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
a
c
a
b
a
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
r
a
c
e
c
a
r
"
,
 
v
a
l
u
e
:
 
"
r
a
c
e
c
a
r
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
d
e
 
(
n
o
 
p
a
l
i
n
d
r
o
m
e
)
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
d
e
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
s
e
t
S
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
M
A
N
A
_
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
f
r
a
m
e
?
.
f
l
a
s
h
K
e
y
 
?
 
[
f
r
a
m
e
.
f
l
a
s
h
K
e
y
]
 
:
 
[
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
4
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
 
t
e
x
t
-
x
s
"
>


 
 
 
 
 
 
 
 
 
 
<
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
b
l
u
e
-
5
0
0
"
>
b
l
u
e
<
/
s
p
a
n
>
 
=
 
c
u
r
r
e
n
t
 
i
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
e
m
e
r
a
l
d
-
5
0
0
"
>
g
r
e
e
n
<
/
s
p
a
n
>
 
=
 
p
a
l
i
n
d
r
o
m
e
 
a
r
o
u
n
d
 
i
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
a
m
b
e
r
-
5
0
0
"
>
a
m
b
e
r
<
/
s
p
a
n
>
 
=
 
m
i
r
r
o
r
 
i
n
d
e
x
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


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
t
r
i
n
g
C
e
l
l
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
s
=
{
f
r
a
m
e
.
T
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
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
.
s
t
a
t
e
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
o
i
n
t
e
r
s
=
{
f
r
a
m
e
.
p
o
i
n
t
e
r
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
e
l
l
W
i
d
t
h
=
{
2
6
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
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
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
a
l
i
n
d
r
o
m
e
 
r
a
d
i
i
 
p
[
i
]
 
(
t
r
a
n
s
f
o
r
m
e
d
 
s
t
r
i
n
g
 
T
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
l
e
x
 
g
a
p
-
1
 
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
f
r
a
m
e
.
p
.
m
a
p
(
(
v
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
 
i
s
B
e
s
t
 
=
 
i
d
x
 
=
=
=
 
f
r
a
m
e
.
b
e
s
t
C
e
n
t
e
r
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
A
c
t
i
v
e
 
=
 
i
d
x
 
=
=
=
 
f
r
a
m
e
.
i
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
:
 
2
6
,
 
h
e
i
g
h
t
:
 
3
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
i
s
B
e
s
t
 
?
 
"
2
p
x
 
s
o
l
i
d
 
#
1
0
b
9
8
1
"
 
:
 
i
s
A
c
t
i
v
e
 
?
 
"
2
p
x
 
s
o
l
i
d
 
#
3
b
8
2
f
6
"
 
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
B
e
s
t
 
?
 
"
r
g
b
a
(
1
6
,
1
8
5
,
1
2
9
,
0
.
1
2
)
"
 
:
 
i
s
A
c
t
i
v
e
 
?
 
"
r
g
b
a
(
5
9
,
1
3
0
,
2
4
6
,
0
.
1
2
)
"
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
 
l
e
a
d
i
n
g
-
n
o
n
e
"
 
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
 
9
 
}
}
>
{
i
d
x
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
o
n
t
-
b
o
l
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
"
 
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
 
1
1
,
 
c
o
l
o
r
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
 
}
}
>
{
v
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
d
i
v
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
f
r
a
m
e
.
b
e
s
t
C
e
n
t
e
r
 
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
 
&
&
 
f
r
a
m
e
.
b
e
s
t
R
a
d
i
u
s
 
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
 
p
t
-
3
 
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
d
a
s
h
e
d
 
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
 
t
e
x
t
-
e
m
e
r
a
l
d
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
e
m
e
r
a
l
d
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
L
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
e
 
r
a
d
i
u
s
:
 
{
f
r
a
m
e
.
b
e
s
t
R
a
d
i
u
s
}
 
(
c
e
n
t
e
r
e
d
 
a
t
 
T
[
{
f
r
a
m
e
.
b
e
s
t
C
e
n
t
e
r
}
]
)
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
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
V
i
z
M
o
d
e
>
(
"
z
"
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
2
 
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
 
"
z
"
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
"
z
"
)
}
>


 
 
 
 
 
 
 
 
 
 
Z
-
a
l
g
o
r
i
t
h
m


 
 
 
 
 
 
 
 
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
 
"
m
a
n
a
c
h
e
r
"
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
"
m
a
n
a
c
h
e
r
"
)
}
>


 
 
 
 
 
 
 
 
 
 
M
a
n
a
c
h
e
r
 
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
e
)


 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
z
"
 
?
 
<
Z
V
i
z
 
/
>
 
:
 
<
M
a
n
a
V
i
z
 
/
>
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
 
 
L
e
a
r
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
Z
-
a
r
r
a
y
,
 
w
h
a
t
 
i
t
 
i
s
"
,
 
b
:
 
"
z
[
i
]
 
=
 
t
h
e
 
l
e
n
g
t
h
 
o
f
 
t
h
e
 
l
o
n
g
e
s
t
 
s
u
b
s
t
r
i
n
g
 
o
f
 
s
 
s
t
a
r
t
i
n
g
 
a
t
 
i
n
d
e
x
 
i
 
t
h
a
t
 
m
a
t
c
h
e
s
 
a
 
p
r
e
f
i
x
 
o
f
 
s
.
 
B
y
 
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
 
z
[
0
]
 
=
 
0
 
(
o
r
 
n
,
 
d
e
p
e
n
d
i
n
g
 
o
n
 
s
t
y
l
e
)
.
 
T
h
e
 
Z
-
a
r
r
a
y
 
c
o
m
p
r
e
s
s
e
s
 
'
h
o
w
 
f
a
r
 
d
o
e
s
 
s
 
l
o
o
k
 
l
i
k
e
 
i
t
s
 
o
w
n
 
p
r
e
f
i
x
 
f
r
o
m
 
t
h
i
s
 
p
o
i
n
t
'
 
f
o
r
 
e
v
e
r
y
 
i
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
Z
 
t
r
i
c
k
,
 
p
a
t
t
e
r
n
 
m
a
t
c
h
i
n
g
 
i
n
 
O
(
n
+
m
)
"
,
 
b
:
 
"
T
o
 
f
i
n
d
 
a
l
l
 
o
c
c
u
r
r
e
n
c
e
s
 
o
f
 
p
a
t
t
e
r
n
 
P
 
i
n
 
t
e
x
t
 
T
,
 
b
u
i
l
d
 
t
h
e
 
Z
-
a
r
r
a
y
 
o
f
 
S
 
=
 
P
 
+
 
'
$
'
 
+
 
T
 
(
w
h
e
r
e
 
$
 
i
s
 
a
 
s
e
p
a
r
a
t
o
r
 
n
o
t
 
a
p
p
e
a
r
i
n
g
 
a
n
y
w
h
e
r
e
)
.
 
A
n
y
 
i
n
d
e
x
 
i
 
w
i
t
h
 
z
[
i
]
 
=
 
|
P
|
 
m
a
r
k
s
 
a
n
 
o
c
c
u
r
r
e
n
c
e
 
o
f
 
P
 
s
t
a
r
t
i
n
g
 
a
t
 
i
 
−
 
|
P
|
 
−
 
1
 
i
n
 
T
.
 
S
a
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
 
a
s
 
K
M
P
,
 
o
f
t
e
n
 
e
a
s
i
e
r
 
t
o
 
c
o
d
e
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
W
h
y
 
Z
 
i
s
 
O
(
n
)
"
,
 
b
:
 
"
T
h
e
 
Z
-
b
o
x
 
[
l
,
 
r
)
 
t
r
a
c
k
s
 
t
h
e
 
r
i
g
h
t
m
o
s
t
-
e
x
t
e
n
d
i
n
g
 
s
u
b
s
t
r
i
n
g
 
k
n
o
w
n
 
t
o
 
m
a
t
c
h
 
a
 
p
r
e
f
i
x
.
 
W
h
e
n
 
i
 
l
i
e
s
 
i
n
s
i
d
e
 
i
t
,
 
w
e
 
i
n
i
t
i
a
l
i
z
e
 
z
[
i
]
 
f
r
o
m
 
z
[
i
-
l
]
 
f
o
r
 
F
R
E
E
 
(
c
a
p
p
e
d
 
b
y
 
r
-
i
)
.
 
B
r
u
t
e
-
f
o
r
c
e
 
e
x
p
a
n
s
i
o
n
 
o
n
l
y
 
h
a
p
p
e
n
s
 
p
a
s
t
 
r
,
 
a
n
d
 
t
h
e
 
e
x
p
a
n
s
i
o
n
 
a
d
v
a
n
c
e
s
 
r
 
e
a
c
h
 
t
i
m
e
,
 
s
o
 
t
h
e
 
T
O
T
A
L
 
e
x
t
e
n
s
i
o
n
 
w
o
r
k
 
i
s
 
b
o
u
n
d
e
d
 
b
y
 
n
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
M
a
n
a
c
h
e
r
,
 
w
h
a
t
 
i
t
 
i
s
"
,
 
b
:
 
"
C
o
m
p
u
t
e
s
 
t
h
e
 
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
t
r
i
n
g
 
o
f
 
s
 
i
n
 
O
(
n
)
 
(
v
s
 
t
h
e
 
o
b
v
i
o
u
s
 
O
(
n
³
)
 
o
r
 
O
(
n
²
)
)
.
 
T
h
e
 
t
r
i
c
k
:
 
i
n
s
e
r
t
 
'
#
'
 
b
e
t
w
e
e
n
 
e
v
e
r
y
 
c
h
a
r
a
c
t
e
r
 
(
s
o
 
'
a
b
a
'
 
b
e
c
o
m
e
s
 
'
#
a
#
b
#
a
#
'
)
,
 
t
u
r
n
i
n
g
 
E
V
E
R
Y
 
p
a
l
i
n
d
r
o
m
e
 
i
n
t
o
 
a
n
 
o
d
d
-
l
e
n
g
t
h
 
p
a
l
i
n
d
r
o
m
e
 
a
b
o
u
t
 
a
 
s
i
n
g
l
e
 
c
e
n
t
e
r
.
 
T
h
e
n
 
e
x
p
l
o
i
t
 
r
e
f
l
e
c
t
i
o
n
-
a
r
o
u
n
d
-
k
n
o
w
n
-
p
a
l
i
n
d
r
o
m
e
s
 
t
h
e
 
s
a
m
e
 
w
a
y
 
Z
 
e
x
p
l
o
i
t
s
 
t
h
e
 
Z
-
b
o
x
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
M
a
n
a
c
h
e
r
'
s
 
s
y
m
m
e
t
r
y
 
t
r
i
c
k
"
,
 
b
:
 
"
M
a
i
n
t
a
i
n
 
(
C
,
 
R
)
 
=
 
t
h
e
 
r
i
g
h
t
m
o
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
e
'
s
 
c
e
n
t
e
r
 
a
n
d
 
r
i
g
h
t
 
b
o
u
n
d
a
r
y
.
 
F
o
r
 
a
 
n
e
w
 
i
n
d
e
x
 
i
 
<
 
R
,
 
i
t
s
 
m
i
r
r
o
r
 
a
c
r
o
s
s
 
C
 
i
s
 
2
C
 
−
 
i
.
 
W
e
 
c
a
n
 
S
E
E
D
 
p
[
i
]
 
=
 
m
i
n
(
R
 
−
 
i
,
 
p
[
m
i
r
r
o
r
]
)
 
b
e
f
o
r
e
 
a
n
y
 
c
h
a
r
a
c
t
e
r
 
c
o
m
p
a
r
i
s
o
n
s
.
 
T
h
e
 
e
x
a
c
t
-
O
(
n
)
 
b
o
u
n
d
 
c
o
m
e
s
 
f
r
o
m
 
t
h
e
 
s
a
m
e
 
p
o
t
e
n
t
i
a
l
-
f
u
n
c
t
i
o
n
 
a
r
g
u
m
e
n
t
 
a
s
 
Z
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
Z
 
v
s
 
K
M
P
,
 
w
h
e
n
 
e
a
c
h
 
w
i
n
s
"
,
 
b
:
 
"
B
o
t
h
 
a
r
e
 
O
(
n
 
+
 
m
)
 
f
o
r
 
p
a
t
t
e
r
n
 
m
a
t
c
h
i
n
g
.
 
Z
 
i
s
 
c
o
n
c
e
p
t
u
a
l
l
y
 
s
i
m
p
l
e
r
 
(
n
o
 
f
a
i
l
u
r
e
 
f
u
n
c
t
i
o
n
,
 
j
u
s
t
 
a
 
l
e
n
g
t
h
 
a
r
r
a
y
)
.
 
K
M
P
 
w
i
n
s
 
w
h
e
n
 
y
o
u
 
o
n
l
y
 
h
a
v
e
 
o
n
e
 
p
a
s
s
 
o
v
e
r
 
t
h
e
 
t
e
x
t
 
a
n
d
 
w
a
n
t
 
m
i
n
i
m
a
l
 
e
x
t
r
a
 
m
e
m
o
r
y
.
 
F
o
r
 
m
u
l
t
i
-
p
a
t
t
e
r
n
 
m
a
t
c
h
i
n
g
,
 
n
e
i
t
h
e
r
,
 
u
s
e
 
A
h
o
-
C
o
r
a
s
i
c
k
.
 
F
o
r
 
p
a
l
i
n
d
r
o
m
e
s
,
 
O
N
L
Y
 
M
a
n
a
c
h
e
r
 
g
i
v
e
s
 
O
(
n
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
l
i
n
e
a
r
-
t
i
m
e
 
s
t
r
i
n
g
 
m
a
g
i
c
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
:
 
r
e
f
l
e
c
t
i
o
n
 
b
e
a
t
s
 
r
e
-
c
o
m
p
a
r
i
s
o
n
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


 
 
 
 
 
 
 
 
 
 
B
o
t
h
 
Z
 
a
n
d
 
M
a
n
a
c
h
e
r
 
e
x
p
l
o
i
t
 
t
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
:
 
w
h
e
n
 
y
o
u
 
h
a
v
e
 
a
l
r
e
a
d
y
 
m
a
t
c
h
e
d
 
o
r
 
e
x
t
e
n
d
e
d
 
s
o
m
e
t
h
i
n
g
,
 
y
o
u
 
d
o
 
n
o
t
 
n
e
e
d
 
t
o
 
r
e
d
o
 
w
o
r
k
 
f
o
r
 
i
n
d
i
c
e
s
 
w
h
o
s
e
 
a
n
s
w
e
r
 
i
s
 
d
e
t
e
r
m
i
n
e
d
 
b
y
 
r
e
f
l
e
c
t
i
o
n
 
a
r
o
u
n
d
 
w
h
a
t
 
y
o
u
 
a
l
r
e
a
d
y
 
k
n
o
w
.
 
T
h
e
 
b
o
o
k
k
e
e
p
i
n
g
 
(
Z
-
b
o
x
 
f
o
r
 
Z
,
 
c
e
n
t
e
r
+
r
a
d
i
u
s
 
f
o
r
 
M
a
n
a
c
h
e
r
)
 
l
e
t
s
 
y
o
u
 
r
e
u
s
e
 
p
r
i
o
r
 
m
a
t
c
h
e
s
 
a
n
d
 
e
x
t
e
n
d
 
o
n
l
y
 
p
a
s
t
 
t
h
e
 
k
n
o
w
n
 
b
o
u
n
d
a
r
y
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
6
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
 
m
b
-
2
 
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
 
u
p
p
e
r
c
a
s
e
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
 
I
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
s
 
=
 
[


 
 
 
 
{
 
q
:
 
"
Z
-
a
r
r
a
y
 
o
f
 
'
a
a
b
c
a
a
b
'
 
=
 
?
"
,
 
a
:
 
"
[
0
,
 
1
,
 
0
,
 
0
,
 
3
,
 
1
,
 
0
]
"
 
}
,


 
 
 
 
{
 
q
:
 
"
L
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
e
 
o
f
 
'
b
a
b
a
d
'
 
(
o
n
e
 
v
a
l
i
d
 
a
n
s
w
e
r
)
?
"
,
 
a
:
 
"
'
b
a
b
'
 
o
r
 
'
a
b
a
'
"
 
}
,


 
 
 
 
{
 
q
:
 
"
L
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
e
 
o
f
 
'
c
b
b
d
'
?
"
,
 
a
:
 
"
'
b
b
'
"
 
}
,


 
 
 
 
{
 
q
:
 
"
T
o
 
s
e
a
r
c
h
 
p
a
t
t
e
r
n
 
P
 
i
n
 
t
e
x
t
 
T
 
u
s
i
n
g
 
Z
,
 
y
o
u
 
b
u
i
l
d
 
Z
 
o
f
?
"
,
 
a
:
 
"
P
 
+
 
'
$
'
 
+
 
T
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
V
e
r
i
f
y
 
e
a
c
h
 
a
n
s
w
e
r
 
i
n
 
t
h
e
 
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
s
t
o
n
e
-
2
0
0
 
m
b
-
3
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
t
o
n
e
-
5
0
0
 
m
r
-
2
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


 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
q
}


 
 
 
 
 
 
 
 
 
 
<
/
p
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
 
g
a
p
-
2
 
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
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
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
y
o
u
r
 
a
n
s
w
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
m
 
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
 
d
a
r
k
:
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
w
h
i
t
e
/
3
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
 
m
i
n
W
i
d
t
h
:
 
2
4
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
h
o
w
n
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
"
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
l
i
m
e
-
4
0
0
/
3
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
a
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
5
 
p
t
-
5
 
p
b
-
2
"
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
Z
 
v
s
 
K
M
P
,
 
h
e
a
d
 
t
o
 
h
e
a
d
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
/
d
i
v
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
P
r
o
p
e
r
t
y
"
,
 
"
Z
-
a
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
K
M
P
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
2
 
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
T
i
m
e
"
,
 
"
O
(
n
 
+
 
m
)
"
,
 
"
O
(
n
 
+
 
m
)
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
S
p
a
c
e
"
,
 
"
O
(
n
 
+
 
m
)
"
,
 
"
O
(
m
)
,
 
f
a
i
l
u
r
e
 
f
u
n
c
 
o
n
l
y
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
C
o
n
c
e
p
t
u
a
l
 
m
o
d
e
l
"
,
 
"
L
e
n
g
t
h
 
a
r
r
a
y
 
(
z
[
i
]
)
"
,
 
"
F
a
i
l
u
r
e
 
f
u
n
c
t
i
o
n
 
(
f
a
l
l
-
b
a
c
k
 
j
u
m
p
s
)
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
S
t
r
e
a
m
i
n
g
-
f
r
i
e
n
d
l
y
"
,
 
"
N
o
 
(
n
e
e
d
s
 
w
h
o
l
e
 
s
t
r
i
n
g
)
"
,
 
"
Y
e
s
 
(
s
t
a
t
e
 
m
a
c
h
i
n
e
 
o
v
e
r
 
t
e
x
t
)
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
C
o
d
e
 
l
e
n
g
t
h
"
,
 
"
~
1
0
 
l
i
n
e
s
"
,
 
"
~
1
5
 
l
i
n
e
s
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
G
e
n
e
r
a
l
i
z
e
s
 
t
o
"
,
 
"
P
a
l
i
n
d
r
o
m
e
s
 
(
M
a
n
a
c
h
e
r
)
,
 
s
u
f
f
i
x
 
a
r
r
a
y
 
p
r
e
p
"
,
 
"
A
h
o
-
C
o
r
a
s
i
c
k
 
(
m
u
l
t
i
-
p
a
t
t
e
r
n
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
r
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
s
e
m
i
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
1
0
0
"
>
{
r
[
0
]
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
r
[
1
]
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
r
[
2
]
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
S
t
r
i
n
g
-
a
l
g
o
r
i
t
h
m
 
z
o
o
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
 
p
l
-
4
 
l
i
s
t
-
d
i
s
c
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
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
1
0
0
"
>
S
i
n
g
l
e
-
p
a
t
t
e
r
n
 
m
a
t
c
h
<
/
s
t
r
o
n
g
>
:
 
K
M
P
,
 
Z
,
 
o
r
 
B
o
y
e
r
-
M
o
o
r
e
.
 
P
r
o
d
u
c
t
i
o
n
 
=
 
B
o
y
e
r
-
M
o
o
r
e
 
v
a
r
i
a
n
t
s
 
(
u
s
e
d
 
b
y
 
g
r
e
p
,
 
g
i
t
 
d
i
f
f
)
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
1
0
0
"
>
M
u
l
t
i
-
p
a
t
t
e
r
n
 
m
a
t
c
h
<
/
s
t
r
o
n
g
>
:
 
A
h
o
-
C
o
r
a
s
i
c
k
,
 
O
(
n
 
+
 
s
u
m
 
o
f
 
p
a
t
t
e
r
n
s
)
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
1
0
0
"
>
A
p
p
r
o
x
i
m
a
t
e
 
m
a
t
c
h
<
/
s
t
r
o
n
g
>
:
 
R
a
b
i
n
-
K
a
r
p
 
r
o
l
l
i
n
g
 
h
a
s
h
 
o
r
 
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
 
a
u
t
o
m
a
t
o
n
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
1
0
0
"
>
L
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
:
 
M
a
n
a
c
h
e
r
,
 
O
(
n
)
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
1
0
0
"
>
S
u
b
s
t
r
i
n
g
 
q
u
e
r
i
e
s
 
e
n
 
m
a
s
s
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
:
 
s
u
f
f
i
x
 
a
r
r
a
y
 
+
 
L
C
P
 
(
K
a
s
a
i
 
O
(
n
)
)
,
 
o
r
 
s
u
f
f
i
x
 
a
u
t
o
m
a
t
o
n
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
1
0
0
"
>
P
e
r
i
o
d
i
c
i
t
y
 
/
 
b
o
r
d
e
r
s
<
/
s
t
r
o
n
g
>
:
 
Z
-
a
r
r
a
y
,
 
z
[
i
]
 
=
 
i
 
m
e
a
n
s
 
s
 
h
a
s
 
p
e
r
i
o
d
 
i
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
 
i
n
s
e
r
t
 
'
#
'
 
f
o
r
 
M
a
n
a
c
h
e
r
?
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
A
 
n
a
i
v
e
 
e
x
p
a
n
d
-
a
r
o
u
n
d
-
c
e
n
t
e
r
 
a
l
g
o
r
i
t
h
m
 
m
u
s
t
 
h
a
n
d
l
e
 
t
w
o
 
c
a
s
e
s
:
 
o
d
d
-
l
e
n
g
t
h
 
p
a
l
i
n
d
r
o
m
e
s
 
(
c
e
n
t
e
r
 
o
n
 
a
 
c
h
a
r
)
 
a
n
d
 
e
v
e
n
-
l
e
n
g
t
h
 
(
c
e
n
t
e
r
 
b
e
t
w
e
e
n
 
c
h
a
r
s
)
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
 
'
#
'
 
b
e
t
w
e
e
n
 
e
v
e
r
y
 
c
h
a
r
a
c
t
e
r
 
m
a
k
e
s
 
E
V
E
R
Y
 
p
a
l
i
n
d
r
o
m
e
 
o
d
d
-
l
e
n
g
t
h
 
a
b
o
u
t
 
s
o
m
e
 
p
o
s
i
t
i
o
n
 
i
n
 
t
h
e
 
n
e
w
 
s
t
r
i
n
g
.
 
p
[
i
]
 
i
n
 
t
h
e
 
n
e
w
 
s
t
r
i
n
g
 
m
a
p
s
 
b
a
c
k
 
v
i
a
 
i
n
t
e
g
e
r
 
d
i
v
i
s
i
o
n
:


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
<
C
o
d
e
B
l
o
c
k
>
o
r
i
g
i
n
a
l
_
r
a
d
i
u
s
 
=
 
⌊
p
[
i
]
/
2
⌋
,
 
 
 
o
r
i
g
i
n
a
l
_
s
t
a
r
t
 
=
 
⌊
(
i
 
−
 
p
[
i
]
)
/
2
⌋
<
/
C
o
d
e
B
l
o
c
k
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
 
m
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
T
h
e
 
t
r
a
n
s
f
o
r
m
 
d
o
u
b
l
e
s
 
t
h
e
 
s
t
r
i
n
g
 
l
e
n
g
t
h
 
b
u
t
 
c
l
e
a
n
s
 
u
p
 
t
h
e
 
c
a
s
e
 
a
n
a
l
y
s
i
s
 
t
o
 
o
n
e
 
l
o
o
p
.
 
N
o
 
m
a
i
n
s
t
r
e
a
m
 
s
t
d
l
i
b
 
s
h
i
p
s
 
t
h
e
s
e
,
 
c
a
r
r
y
 
t
h
e
m
 
a
s
 
t
e
m
p
l
a
t
e
s
.
 
L
e
e
t
C
o
d
e
 
5
,
 
2
8
,
 
2
1
4
,
 
1
3
9
2
 
a
r
e
 
t
h
e
 
c
a
n
o
n
i
c
a
l
 
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
r
o
b
l
e
m
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
S
t
d
l
i
b
 
r
e
a
l
i
t
y
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
o
 
m
a
i
n
s
t
r
e
a
m
 
s
t
d
l
i
b
 
s
h
i
p
s
 
Z
 
o
r
 
M
a
n
a
c
h
e
r
.
 
P
y
t
h
o
n
 
<
I
n
l
i
n
e
C
o
d
e
>
r
e
<
/
I
n
l
i
n
e
C
o
d
e
>
 
u
s
e
s
 
N
F
A
/
D
F
A
.
 
J
a
v
a
 
<
I
n
l
i
n
e
C
o
d
e
>
P
a
t
t
e
r
n
<
/
I
n
l
i
n
e
C
o
d
e
>
 
u
s
e
s
 
T
h
o
m
p
s
o
n
 
N
F
A
 
+
 
b
y
t
e
c
o
d
e
.
 
C
+
+
 
<
I
n
l
i
n
e
C
o
d
e
>
s
t
d
:
:
r
e
g
e
x
<
/
I
n
l
i
n
e
C
o
d
e
>
 
u
s
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
 
(
w
a
t
c
h
 
f
o
r
 
c
a
t
a
s
t
r
o
p
h
i
c
 
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
)
.
 
B
o
y
e
r
-
M
o
o
r
e
 
v
a
r
i
a
n
t
s
 
a
r
e
 
i
n
s
i
d
e
 
g
r
e
p
/
r
i
p
g
r
e
p
.
 
F
o
r
 
L
e
e
t
C
o
d
e
-
s
t
y
l
e
 
p
r
o
b
l
e
m
s
 
(
L
C
5
,
 
L
C
2
8
,
 
L
C
2
1
4
,
 
L
C
1
3
9
2
)
,
 
Z
 
a
n
d
 
M
a
n
a
c
h
e
r
 
a
r
e
 
t
h
e
 
r
i
g
h
t
 
t
o
o
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
7
_
Z
M
a
n
a
c
h
e
r
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
W
h
a
t
 
d
o
e
s
 
z
[
i
]
 
r
e
p
r
e
s
e
n
t
 
i
n
 
t
h
e
 
Z
-
a
l
g
o
r
i
t
h
m
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
 
n
u
m
b
e
r
 
o
f
 
t
i
m
e
s
 
s
[
i
]
 
a
p
p
e
a
r
s
 
i
n
 
s
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
l
e
n
g
t
h
 
o
f
 
t
h
e
 
l
o
n
g
e
s
t
 
s
u
b
s
t
r
i
n
g
 
o
f
 
s
 
s
t
a
r
t
i
n
g
 
a
t
 
i
 
t
h
a
t
 
e
q
u
a
l
s
 
a
 
p
r
e
f
i
x
 
o
f
 
s
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
p
o
s
i
t
i
o
n
 
o
f
 
t
h
e
 
n
e
x
t
 
o
c
c
u
r
r
e
n
c
e
 
o
f
 
s
[
i
]
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
d
e
p
t
h
 
o
f
 
i
 
i
n
 
a
 
s
u
f
f
i
x
 
t
r
e
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
z
[
i
]
 
=
 
m
a
x
 
k
 
s
u
c
h
 
t
h
a
t
 
s
[
0
.
.
k
-
1
]
 
=
=
 
s
[
i
.
.
i
+
k
-
1
]
.
 
T
h
e
 
Z
-
a
r
r
a
y
 
c
o
m
p
r
e
s
s
e
s
 
'
p
r
e
f
i
x
 
m
a
t
c
h
'
 
i
n
f
o
 
f
o
r
 
e
v
e
r
y
 
s
t
a
r
t
i
n
g
 
i
n
d
e
x
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
o
 
f
i
n
d
 
a
l
l
 
o
c
c
u
r
r
e
n
c
e
s
 
o
f
 
P
 
i
n
 
T
 
u
s
i
n
g
 
Z
,
 
w
h
a
t
 
s
t
r
i
n
g
 
d
o
 
y
o
u
 
b
u
i
l
d
 
t
h
e
 
Z
-
a
r
r
a
y
 
o
f
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
P
 
o
n
l
y
"
,
 
"
T
 
o
n
l
y
"
,
 
"
P
 
+
 
T
 
(
c
o
n
c
a
t
e
n
a
t
e
d
)
"
,
 
"
P
 
+
 
'
$
'
 
+
 
T
 
(
w
i
t
h
 
s
e
p
a
r
a
t
o
r
 
$
 
n
o
t
 
i
n
 
a
l
p
h
a
b
e
t
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
 
3
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
 
s
e
p
a
r
a
t
o
r
 
$
 
e
n
s
u
r
e
s
 
z
[
i
]
 
n
e
v
e
r
 
e
x
c
e
e
d
s
 
|
P
|
;
 
a
n
y
 
i
n
d
e
x
 
i
n
 
t
h
e
 
T
 
p
a
r
t
 
w
i
t
h
 
z
[
i
]
 
=
 
|
P
|
 
m
a
r
k
s
 
a
n
 
o
c
c
u
r
r
e
n
c
e
 
a
t
 
i
 
−
 
|
P
|
 
−
 
1
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
 
t
h
e
 
Z
-
a
l
g
o
r
i
t
h
m
 
O
(
n
)
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
I
t
 
u
s
e
s
 
d
y
n
a
m
i
c
 
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
,


 
 
 
 
 
 
 
 
"
I
n
s
i
d
e
 
t
h
e
 
Z
-
b
o
x
,
 
w
o
r
k
 
i
s
 
r
e
u
s
e
d
 
f
o
r
 
f
r
e
e
;
 
b
r
u
t
e
-
f
o
r
c
e
 
e
x
t
e
n
s
i
o
n
 
o
n
l
y
 
h
a
p
p
e
n
s
 
p
a
s
t
 
R
,
 
a
n
d
 
e
a
c
h
 
e
x
t
e
n
s
i
o
n
 
a
d
v
a
n
c
e
s
 
R
,
 
s
o
 
t
o
t
a
l
 
e
x
t
e
n
s
i
o
n
 
w
o
r
k
 
i
s
 
a
t
 
m
o
s
t
 
n
"
,


 
 
 
 
 
 
 
 
"
B
e
c
a
u
s
e
 
p
a
l
i
n
d
r
o
m
e
s
"
,


 
 
 
 
 
 
 
 
"
H
a
s
h
-
b
a
s
e
d
 
a
m
o
r
t
i
z
a
t
i
o
n
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
a
m
e
 
p
o
t
e
n
t
i
a
l
 
a
r
g
u
m
e
n
t
 
a
s
 
K
M
P
.
 
I
n
n
e
r
-
l
o
o
p
 
w
o
r
k
 
i
s
 
b
o
u
n
d
e
d
 
b
y
 
t
o
t
a
l
 
a
d
v
a
n
c
e
m
e
n
t
 
o
f
 
t
h
e
 
r
i
g
h
t
 
b
o
u
n
d
a
r
y
,
 
w
h
i
c
h
 
i
s
 
a
t
 
m
o
s
t
 
n
 
t
o
t
a
l
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
 
d
o
e
s
 
M
a
n
a
c
h
e
r
 
t
r
a
n
s
f
o
r
m
 
'
a
b
c
'
 
i
n
t
o
 
'
#
a
#
b
#
c
#
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
T
o
 
a
v
o
i
d
 
h
a
s
h
i
n
g
 
c
o
l
l
i
s
i
o
n
s
"
,


 
 
 
 
 
 
 
 
"
B
e
c
a
u
s
e
 
p
a
l
i
n
d
r
o
m
e
s
 
o
n
l
y
 
e
x
i
s
t
 
a
t
 
o
d
d
 
l
e
n
g
t
h
s
"
,


 
 
 
 
 
 
 
 
"
T
o
 
h
a
n
d
l
e
 
e
v
e
n
 
a
n
d
 
o
d
d
 
p
a
l
i
n
d
r
o
m
e
s
 
u
n
i
f
o
r
m
l
y
,
 
e
v
e
r
y
 
p
a
l
i
n
d
r
o
m
e
 
i
n
 
t
h
e
 
t
r
a
n
s
f
o
r
m
e
d
 
s
t
r
i
n
g
 
i
s
 
o
d
d
-
l
e
n
g
t
h
 
a
b
o
u
t
 
a
 
s
i
n
g
l
e
 
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
"
T
o
 
r
e
d
u
c
e
 
m
e
m
o
r
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
W
i
t
h
o
u
t
 
'
#
'
,
 
'
a
b
b
a
'
 
w
o
u
l
d
 
h
a
v
e
 
i
t
s
 
c
e
n
t
e
r
 
b
e
t
w
e
e
n
 
t
w
o
 
c
h
a
r
s
.
 
T
h
e
 
'
#
'
 
i
n
s
e
r
t
i
o
n
 
m
a
k
e
s
 
E
V
E
R
Y
 
p
a
l
i
n
d
r
o
m
e
 
o
d
d
,
 
s
o
 
a
 
s
i
n
g
l
e
 
'
e
x
p
a
n
d
 
a
r
o
u
n
d
 
i
n
d
e
x
 
i
'
 
l
o
o
p
 
h
a
n
d
l
e
s
 
b
o
t
h
 
c
a
s
e
s
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
n
a
c
h
e
r
'
s
 
a
l
g
o
r
i
t
h
m
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
n
²
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
n
)
"
,
 
"
O
(
n
 
√
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
L
i
n
e
a
r
,
 
b
y
 
t
h
e
 
s
a
m
e
 
p
o
t
e
n
t
i
a
l
 
a
r
g
u
m
e
n
t
 
a
s
 
Z
:
 
e
x
t
e
n
s
i
o
n
 
w
o
r
k
 
p
a
s
t
 
t
h
e
 
r
i
g
h
t
m
o
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
e
 
b
o
u
n
d
a
r
y
 
R
 
c
a
n
 
t
o
t
a
l
 
a
t
 
m
o
s
t
 
n
 
a
c
r
o
s
s
 
t
h
e
 
w
h
o
l
e
 
r
u
n
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
Z
-
F
u
n
c
t
i
o
n
 
&
 
M
a
n
a
c
h
e
r
"


 
 
 
 
 
 
l
e
v
e
l
=
{
7
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
6
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
H
i
g
h
,
 
L
C
5
 
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
e
,
 
L
C
2
8
 
s
t
r
S
t
r
,
 
L
C
2
1
4
 
s
h
o
r
t
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
e
,
 
L
C
1
3
9
2
 
l
o
n
g
e
s
t
 
h
a
p
p
y
 
p
r
e
f
i
x
.
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
L
o
w
e
s
t
 
C
o
m
m
o
n
 
A
n
c
e
s
t
o
r
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


