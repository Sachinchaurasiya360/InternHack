
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
a
c
k
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
 
h
e
l
p
e
r
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
 
S
t
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




/
*
*
 
I
n
l
i
n
e
 
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
:
 
v
e
r
t
i
c
a
l
 
s
t
a
c
k
 
o
f
 
b
o
x
e
s
,
 
n
e
w
e
s
t
 
o
n
 
t
o
p
.
 
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


 
 
i
t
e
m
s
,


 
 
t
i
t
l
e
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


}
:
 
{


 
 
i
t
e
m
s
:
 
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
 
}
[
]
;


 
 
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


 
 
m
a
x
H
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


}
)
 
{


 
 
c
o
n
s
t
 
w
 
=
 
w
i
d
t
h
 
?
?
 
1
1
0
;


 
 
c
o
n
s
t
 
b
o
x
H
 
=
 
4
0
;


 
 
c
o
n
s
t
 
v
i
s
I
t
e
m
s
 
=
 
[
.
.
.
i
t
e
m
s
]
.
r
e
v
e
r
s
e
(
)
;
 
/
/
 
t
o
p
 
o
f
 
s
t
a
c
k
 
f
i
r
s
t


 
 
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
1
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
1
 
p
-
2
 
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
 
w
,
 
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
 
m
a
x
H
e
i
g
h
t
 
?
?
 
8
0
 
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
6
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
s
p
a
n
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
{
v
i
s
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
i
t
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
 
i
s
T
o
p
 
=
 
i
 
=
=
=
 
0
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
g
 
=
 
i
t
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
.
c
o
l
o
r
}
2
2
`
 
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
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
o
r
d
e
r
 
=
 
i
t
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
 
b
o
x
H
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
b
o
r
d
e
r
}
`
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
a
l
l
 
0
.
2
5
s
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
t
.
v
a
l
u
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
T
o
p
 
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
a
b
s
o
l
u
t
e
 
-
r
i
g
h
t
-
1
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
M
u
t
e
d
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
 
F
r
a
m
e
 
/
 
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
 
b
o
o
l
e
a
n
 
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


 
 
h
i
g
h
l
i
g
h
t
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


 
 
s
t
a
c
k
:
 
S
t
I
t
e
m
[
]
;


 
 
c
u
r
s
o
r
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
u
s
:
 
"
r
u
n
n
i
n
g
"
 
|
 
"
m
a
t
c
h
e
d
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
 
|
 
"
u
n
b
a
l
a
n
c
e
d
-
o
p
e
n
"
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
s
B
a
l
a
n
c
e
d
(
s
)
:
"
,


 
 
"
 
 
s
t
a
c
k
 
←
 
e
m
p
t
y
"
,


 
 
"
 
 
f
o
r
 
c
h
 
i
n
 
s
:
"
,


 
 
"
 
 
 
 
i
f
 
c
h
 
i
s
 
o
p
e
n
i
n
g
 
b
r
a
c
k
e
t
:
"
,


 
 
"
 
 
 
 
 
 
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
c
h
)
"
,


 
 
"
 
 
 
 
e
l
s
e
 
i
f
 
c
h
 
i
s
 
c
l
o
s
i
n
g
 
b
r
a
c
k
e
t
:
"
,


 
 
"
 
 
 
 
 
 
i
f
 
s
t
a
c
k
 
e
m
p
t
y
 
o
r
 
t
o
p
 
≠
 
m
a
t
c
h
(
c
h
)
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
 
f
a
l
s
e
"
,


 
 
"
 
 
 
 
 
 
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
"
,


 
 
"
 
 
r
e
t
u
r
n
 
s
t
a
c
k
.
e
m
p
t
y
(
)
"
,


]
;




c
o
n
s
t
 
P
A
I
R
S
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
>
 
=
 
{
 
"
)
"
:
 
"
(
"
,
 
"
]
"
:
 
"
[
"
,
 
"
}
"
:
 
"
{
"
 
}
;


c
o
n
s
t
 
O
P
E
N
 
=
 
n
e
w
 
S
e
t
(
[
"
(
"
,
 
"
[
"
,
 
"
{
"
]
)
;


c
o
n
s
t
 
C
L
O
S
E
 
=
 
n
e
w
 
S
e
t
(
[
"
)
"
,
 
"
]
"
,
 
"
}
"
]
)
;


c
o
n
s
t
 
B
R
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
>
 
=
 
{


 
 
"
(
"
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
 
"
)
"
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


 
 
"
[
"
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
 
"
]
"
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


 
 
"
{
"
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
 
"
}
"
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
B
a
l
a
n
c
e
d
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
 
i
n
p
u
t
:
 
s
,
 
n
:
 
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
 
"
$
{
s
}
"
 
f
o
r
 
b
a
l
a
n
c
e
d
 
b
r
a
c
k
e
t
s
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
 
c
u
r
s
o
r
:
 
-
1
,
 
s
t
a
t
u
s
:
 
"
r
u
n
n
i
n
g
"
 
}
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
 
s
t
a
c
k
:
 
"
[
]
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
 
e
m
p
t
y
 
s
t
a
c
k
"
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
 
c
u
r
s
o
r
:
 
-
1
,
 
s
t
a
t
u
s
:
 
"
r
u
n
n
i
n
g
"
 
}
)
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
 
S
t
I
t
e
m
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
 
s
.
l
e
n
g
t
h
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
 
c
h
 
=
 
s
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
 
c
h
,
 
t
o
p
:
 
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
?
.
v
a
l
u
e
 
?
?
 
"
-
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
e
a
d
 
c
h
a
r
a
c
t
e
r
 
'
$
{
c
h
}
'
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
 
c
u
r
s
o
r
:
 
i
,
 
s
t
a
t
u
s
:
 
"
r
u
n
n
i
n
g
"
 
}
)
;


 
 
 
 
i
f
 
(
O
P
E
N
.
h
a
s
(
c
h
)
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
 
c
h
,
 
s
t
a
c
k
_
s
i
z
e
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
'
$
{
c
h
}
'
 
i
s
 
a
n
 
o
p
e
n
i
n
g
 
b
r
a
c
k
e
t
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
 
c
u
r
s
o
r
:
 
i
,
 
s
t
a
t
u
s
:
 
"
r
u
n
n
i
n
g
"
 
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
u
s
h
(
{
 
v
a
l
u
e
:
 
c
h
,
 
c
o
l
o
r
:
 
B
R
_
C
O
L
O
R
[
c
h
]
 
}
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
 
4
,
 
v
a
r
s
:
 
{
 
c
h
,
 
s
t
a
c
k
_
s
i
z
e
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
,
 
t
o
p
:
 
c
h
 
}
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
t
o
p
"
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
u
s
h
 
'
$
{
c
h
}
'
 
o
n
t
o
 
s
t
a
c
k
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
 
c
u
r
s
o
r
:
 
i
,
 
s
t
a
t
u
s
:
 
"
r
u
n
n
i
n
g
"
 
}
)
;


 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
C
L
O
S
E
.
h
a
s
(
c
h
)
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
 
5
,
 
v
a
r
s
:
 
{
 
c
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
'
$
{
c
h
}
'
 
i
s
 
a
 
c
l
o
s
i
n
g
 
b
r
a
c
k
e
t
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
 
c
u
r
s
o
r
:
 
i
,
 
s
t
a
t
u
s
:
 
"
r
u
n
n
i
n
g
"
 
}
)
;


 
 
 
 
 
 
c
o
n
s
t
 
t
o
p
 
=
 
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
;


 
 
 
 
 
 
c
o
n
s
t
 
w
a
n
t
 
=
 
P
A
I
R
S
[
c
h
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
 
6
,
 
v
a
r
s
:
 
{
 
c
h
,
 
t
o
p
:
 
t
o
p
?
.
v
a
l
u
e
 
?
?
 
"
e
m
p
t
y
"
,
 
w
a
n
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
N
e
e
d
 
t
o
p
 
t
o
 
b
e
 
'
$
{
w
a
n
t
}
'
,
 
h
a
v
e
 
'
$
{
t
o
p
?
.
v
a
l
u
e
 
?
?
 
"
(
e
m
p
t
y
)
"
}
'
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
 
c
u
r
s
o
r
:
 
i
,
 
s
t
a
t
u
s
:
 
"
r
u
n
n
i
n
g
"
 
}
)
;


 
 
 
 
 
 
i
f
 
(
!
t
o
p
 
|
|
 
t
o
p
.
v
a
l
u
e
 
!
=
=
 
w
a
n
t
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
 
r
e
s
u
l
t
:
 
"
f
a
l
s
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
 
"
M
i
s
m
a
t
c
h
!
 
B
r
a
c
k
e
t
s
 
u
n
b
a
l
a
n
c
e
d
 
-
 
r
e
t
u
r
n
 
f
a
l
s
e
"
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
 
c
u
r
s
o
r
:
 
i
,
 
s
t
a
t
u
s
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
 
c
h
,
 
p
o
p
p
e
d
:
 
t
o
p
.
v
a
l
u
e
,
 
s
t
a
c
k
_
s
i
z
e
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
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
p
o
p
p
e
d
"
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
 
-
 
P
o
p
 
'
$
{
t
o
p
.
v
a
l
u
e
}
'
 
o
f
f
 
s
t
a
c
k
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
 
c
u
r
s
o
r
:
 
i
,
 
s
t
a
t
u
s
:
 
"
r
u
n
n
i
n
g
"
 
}
)
;


 
 
 
 
}


 
 
}


 
 
c
o
n
s
t
 
e
m
p
t
y
 
=
 
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
 
=
=
=
 
0
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
 
s
t
a
c
k
_
s
i
z
e
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
,
 
r
e
s
u
l
t
:
 
S
t
r
i
n
g
(
e
m
p
t
y
)
 
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
 
e
m
p
t
y
 
?
 
"
S
t
a
c
k
 
i
s
 
e
m
p
t
y
 
-
 
b
a
l
a
n
c
e
d
"
 
:
 
`
S
t
a
c
k
 
n
o
n
-
e
m
p
t
y
 
(
$
{
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
 
l
e
f
t
 
o
p
e
n
)
 
-
 
u
n
b
a
l
a
n
c
e
d
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
 
c
u
r
s
o
r
:
 
s
.
l
e
n
g
t
h
 
-
 
1
,
 
s
t
a
t
u
s
:
 
e
m
p
t
y
 
?
 
"
m
a
t
c
h
e
d
"
 
:
 
"
u
n
b
a
l
a
n
c
e
d
-
o
p
e
n
"
 
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
s
t
r
,
 
s
e
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
(
{
[
]
}
(
)
)
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
 
b
u
i
l
d
B
a
l
a
n
c
e
d
(
s
t
r
)
,
 
[
s
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
 
s
t
a
t
u
s
 
=
 
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
t
u
s
 
?
?
 
"
r
u
n
n
i
n
g
"
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
u
s
B
o
r
d
e
r
C
l
a
s
s
 
=


 
 
 
 
s
t
a
t
u
s
 
=
=
=
 
"
m
a
t
c
h
e
d
"
 
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
3
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
"


 
 
 
 
:
 
s
t
a
t
u
s
 
=
=
=
 
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
 
|
|
 
s
t
a
t
u
s
 
=
=
=
 
"
u
n
b
a
l
a
n
c
e
d
-
o
p
e
n
"
 
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
0
0
/
6
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
B
a
l
a
n
c
e
d
-
B
r
a
c
k
e
t
s
 
C
h
e
c
k
e
r
 
(
L
I
F
O
 
S
t
a
c
k
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
B
r
a
c
k
e
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
 
(
)
{
[
]
}
"


 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
U
s
e
 
(
 
)
 
[
 
]
 
{
 
}
,
 
o
t
h
e
r
 
c
h
a
r
a
c
t
e
r
s
 
i
g
n
o
r
e
d
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
a
l
a
n
c
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
(
{
[
]
}
(
)
)
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
U
n
m
a
t
c
h
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
(
[
)
]
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
U
n
c
l
o
s
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
(
(
(
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
E
m
p
t
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
e
e
p
"
,
 
v
a
l
u
e
:
 
"
{
{
{
}
}
}
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
t
r
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
 
p
o
o
l
 
=
 
[
"
(
"
,
 
"
)
"
,
 
"
[
"
,
 
"
]
"
,
 
"
{
"
,
 
"
}
"
]
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
 
=
 
6
 
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
 
6
)
;


 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
S
t
r
(
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
 
p
o
o
l
[
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
 
p
o
o
l
.
l
e
n
g
t
h
)
]
)
.
j
o
i
n
(
"
"
)
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
h
i
g
h
l
i
g
h
t
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
h
i
g
h
l
i
g
h
t
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
5
"
>


 
 
 
 
 
 
 
 
{
/
*
 
I
n
p
u
t
 
t
a
p
e
 
*
/
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
 
m
a
x
-
w
-
x
l
"
>


 
 
 
 
 
 
 
 
 
 
{
s
t
r
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
c
h
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
 
i
s
C
u
r
 
=
 
i
 
=
=
=
 
(
f
r
a
m
e
?
.
c
u
r
s
o
r
 
?
?
 
-
1
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
a
s
t
 
=
 
i
 
<
 
(
f
r
a
m
e
?
.
c
u
r
s
o
r
 
?
?
 
-
1
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
B
R
_
C
O
L
O
R
[
c
h
]
 
?
?
 
"
#
6
4
7
4
8
b
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
l
g
 
r
o
u
n
d
e
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
a
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
 
4
4
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
C
u
r
 
?
 
"
#
3
b
8
2
f
6
"
 
:
 
p
a
s
t
 
?
 
c
 
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
C
u
r
 
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
5
)
"
 
:
 
p
a
s
t
 
?
 
`
$
{
c
}
2
2
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
p
a
s
t
 
?
 
c
 
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
f
o
r
m
:
 
i
s
C
u
r
 
?
 
"
t
r
a
n
s
l
a
t
e
Y
(
-
3
p
x
)
"
 
:
 
"
n
o
n
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
x
S
h
a
d
o
w
:
 
i
s
C
u
r
 
?
 
`
0
 
4
p
x
 
1
0
p
x
 
$
{
c
}
4
4
`
 
:
 
"
n
o
n
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
h
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
v
a
l
u
e
,
 
c
o
l
o
r
:
 
s
.
c
o
l
o
r
 
}
)
)
}


 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
S
t
a
c
k
"


 
 
 
 
 
 
 
 
 
 
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
2
2
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
1
0
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
{
`
p
x
-
4
 
p
y
-
2
 
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
l
g
 
w
-
f
u
l
l
 
$
{
s
t
a
t
u
s
B
o
r
d
e
r
C
l
a
s
s
}
`
}
>


 
 
 
 
 
 
 
 
 
 
{
s
t
a
t
u
s
 
=
=
=
 
"
m
a
t
c
h
e
d
"
 
&
&
 
"
B
a
l
a
n
c
e
d
"
}


 
 
 
 
 
 
 
 
 
 
{
s
t
a
t
u
s
 
=
=
=
 
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
 
&
&
 
"
M
i
s
m
a
t
c
h
 
-
 
c
l
o
s
i
n
g
 
b
r
a
c
k
e
t
 
d
o
e
s
 
n
o
t
 
m
a
t
c
h
 
t
o
p
"
}


 
 
 
 
 
 
 
 
 
 
{
s
t
a
t
u
s
 
=
=
=
 
"
u
n
b
a
l
a
n
c
e
d
-
o
p
e
n
"
 
&
&
 
"
U
n
b
a
l
a
n
c
e
d
 
-
 
u
n
c
l
o
s
e
d
 
o
p
e
n
i
n
g
 
b
r
a
c
k
e
t
s
 
r
e
m
a
i
n
"
}


 
 
 
 
 
 
 
 
 
 
{
s
t
a
t
u
s
 
=
=
=
 
"
r
u
n
n
i
n
g
"
 
&
&
 
(
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
L
I
F
O
,
 
L
a
s
t
 
I
n
,
 
F
i
r
s
t
 
O
u
t
"
,
 
b
:
 
"
T
h
e
 
l
a
s
t
 
t
h
i
n
g
 
y
o
u
 
p
u
s
h
e
d
 
i
s
 
t
h
e
 
f
i
r
s
t
 
t
h
i
n
g
 
y
o
u
 
p
o
p
.
 
E
x
a
c
t
l
y
 
l
i
k
e
 
a
 
s
t
a
c
k
 
o
f
 
p
l
a
t
e
s
:
 
y
o
u
 
t
a
k
e
 
t
h
e
 
t
o
p
 
p
l
a
t
e
 
o
f
f
.
 
N
o
 
r
a
n
d
o
m
-
a
c
c
e
s
s
 
i
n
 
t
h
e
 
m
i
d
d
l
e
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
T
w
o
 
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
,
 
b
o
t
h
 
O
(
1
)
"
,
 
b
:
 
"
p
u
s
h
(
x
)
 
p
u
t
s
 
x
 
o
n
 
t
o
p
;
 
p
o
p
(
)
 
r
e
m
o
v
e
s
 
a
n
d
 
r
e
t
u
r
n
s
 
t
o
p
.
 
P
e
e
k
/
t
o
p
 
r
e
t
u
r
n
s
 
w
i
t
h
o
u
t
 
r
e
m
o
v
i
n
g
.
 
I
m
p
l
e
m
e
n
t
e
d
 
o
n
 
t
o
p
 
o
f
 
a
n
 
a
r
r
a
y
 
o
r
 
s
i
n
g
l
y
 
l
i
n
k
e
d
 
l
i
s
t
,
 
b
o
t
h
 
g
i
v
e
 
O
(
1
)
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
 
i
t
 
f
i
t
s
 
p
a
r
e
n
t
h
e
s
e
s
"
,
 
b
:
 
"
N
e
s
t
i
n
g
 
i
s
 
l
a
s
t
-
i
n
-
f
i
r
s
t
-
o
u
t
:
 
t
h
e
 
m
o
s
t
 
r
e
c
e
n
t
 
'
(
'
 
m
u
s
t
 
c
l
o
s
e
 
b
e
f
o
r
e
 
a
n
y
 
o
l
d
e
r
 
'
(
'
 
c
a
n
.
 
T
h
a
t
 
i
s
 
l
i
t
e
r
a
l
l
y
 
t
h
e
 
d
e
f
i
n
i
t
i
o
n
 
o
f
 
a
 
s
t
a
c
k
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
C
a
l
l
 
s
t
a
c
k
,
 
u
n
d
o
,
 
b
a
c
k
-
b
u
t
t
o
n
"
,
 
b
:
 
"
E
v
e
r
y
 
f
u
n
c
t
i
o
n
 
c
a
l
l
 
p
u
s
h
e
s
 
a
 
f
r
a
m
e
.
 
Y
o
u
r
 
t
e
x
t
 
e
d
i
t
o
r
'
s
 
C
t
r
l
+
Z
 
i
s
 
a
 
s
t
a
c
k
.
 
Y
o
u
r
 
b
r
o
w
s
e
r
'
s
 
b
a
c
k
 
b
u
t
t
o
n
 
i
s
 
a
 
s
t
a
c
k
.
 
O
n
c
e
 
y
o
u
 
s
e
e
 
L
I
F
O
,
 
y
o
u
 
s
e
e
 
s
t
a
c
k
s
 
e
v
e
r
y
w
h
e
r
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
m
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
A
 
P
e
z
 
d
i
s
p
e
n
s
e
r
 
o
f
 
d
a
t
a
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


 
 
 
 
 
 
 
 
 
 
Y
o
u
 
c
a
n
 
o
n
l
y
 
a
d
d
 
a
n
d
 
r
e
m
o
v
e
 
f
r
o
m
 
t
h
e
 
t
o
p
.
 
T
h
a
t
 
r
e
s
t
r
i
c
t
i
o
n
 
l
o
o
k
s
 
l
i
k
e
 
a
 
w
e
a
k
n
e
s
s
,
 
b
u
t
 
i
t


 
 
 
 
 
 
 
 
 
 
i
s
 
p
r
e
c
i
s
e
l
y
 
w
h
a
t
 
m
a
k
e
s
 
s
t
a
c
k
s
 
f
a
s
t
,
 
a
n
d
 
p
e
r
f
e
c
t
l
y
 
m
a
t
c
h
e
d
 
t
o
 
r
e
c
u
r
s
i
o
n
 
a
n
d
 
n
e
s
t
e
d


 
 
 
 
 
 
 
 
 
 
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
c
.
t
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
c
.
b
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
 
'
T
r
a
c
e
 
i
s
B
a
l
a
n
c
e
d
(
"
{
[
]
}
"
)
.
 
R
e
t
u
r
n
 
v
a
l
u
e
?
'
,
 
a
:
 
"
t
r
u
e
"
 
}
,


 
 
 
 
{
 
q
:
 
'
T
r
a
c
e
 
i
s
B
a
l
a
n
c
e
d
(
"
(
[
)
]
"
)
.
 
R
e
t
u
r
n
 
v
a
l
u
e
?
'
,
 
a
:
 
"
f
a
l
s
e
 
(
m
i
s
m
a
t
c
h
 
w
h
e
n
 
'
)
'
 
m
e
e
t
s
 
'
[
'
)
"
 
}
,


 
 
 
 
{
 
q
:
 
"
A
f
t
e
r
 
p
u
s
h
(
1
)
,
 
p
u
s
h
(
2
)
,
 
p
u
s
h
(
3
)
,
 
p
o
p
(
)
,
 
p
e
e
k
(
)
 
r
e
t
u
r
n
s
?
"
,
 
a
:
 
"
2
"
 
}
,


 
 
 
 
{
 
q
:
 
'
M
a
x
 
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
 
f
o
r
 
e
v
a
l
u
a
t
i
n
g
 
"
(
(
(
)
)
)
"
?
'
,
 
a
:
 
"
3
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
,
 
s
e
t
G
u
e
s
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
,
 
s
e
t
S
h
o
w
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
W
o
r
k
 
e
a
c
h
 
o
n
 
p
a
p
e
r
,
 
t
h
e
n
 
r
e
v
e
a
l
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


 
 
 
 
 
 
 
 
 
 
 
 
#
{
i
 
+
 
1
}
 
{
p
.
q
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
 
m
i
n
-
w
-
4
8
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
e
d
i
u
m
 
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
h
o
w
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
n
s
w
e
r
:
 
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
B
e
y
o
n
d
 
b
r
a
c
k
e
t
s
,
 
o
t
h
e
r
 
s
t
a
c
k
 
k
i
l
l
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
5
0
"
>
I
n
f
i
x
 
t
o
 
P
o
s
t
f
i
x
:
<
/
s
t
r
o
n
g
>
 
S
h
u
n
t
i
n
g
-
y
a
r
d
 
u
s
e
s
 
a
n
 
o
p
e
r
a
t
o
r
 
s
t
a
c
k
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
5
0
"
>
E
v
a
l
u
a
t
e
 
p
o
s
t
f
i
x
:
<
/
s
t
r
o
n
g
>
 
p
u
s
h
 
o
p
e
r
a
n
d
s
,
 
p
o
p
 
f
o
r
 
o
p
e
r
a
t
o
r
s
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
5
0
"
>
N
e
x
t
 
g
r
e
a
t
e
r
 
e
l
e
m
e
n
t
:
<
/
s
t
r
o
n
g
>
 
m
o
n
o
t
o
n
i
c
 
s
t
a
c
k
 
i
n
 
O
(
n
)
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
5
0
"
>
I
t
e
r
a
t
i
v
e
 
D
F
S
:
<
/
s
t
r
o
n
g
>
 
e
x
p
l
i
c
i
t
 
s
t
a
c
k
 
r
e
p
l
a
c
e
s
 
r
e
c
u
r
s
i
o
n
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
5
0
"
>
F
u
n
c
t
i
o
n
 
c
a
l
l
 
s
t
a
c
k
:
<
/
s
t
r
o
n
g
>
 
s
t
a
c
k
 
o
v
e
r
f
l
o
w
 
=
 
t
o
o
 
m
a
n
y
 
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
s
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
A
r
r
a
y
 
v
s
 
l
i
n
k
e
d
-
l
i
s
t
 
b
a
c
k
e
d
 
s
t
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
r
r
a
y
:
 
a
m
o
r
t
i
z
e
d
 
O
(
1
)
 
p
u
s
h
 
(
a
v
e
r
a
g
e
d
 
o
v
e
r
 
m
a
n
y
 
p
u
s
h
e
s
,
 
t
h
e
 
p
e
r
-
p
u
s
h
 
c
o
s
t
 
s
t
a
y
s
 
c
o
n
s
t
a
n
t


 
 
 
 
 
 
 
 
 
 
e
v
e
n
 
w
h
e
n
 
t
h
e
 
u
n
d
e
r
l
y
i
n
g
 
a
r
r
a
y
 
o
c
c
a
s
i
o
n
a
l
l
y
 
h
a
s
 
t
o
 
g
r
o
w
)
 
b
u
t
 
o
c
c
a
s
i
o
n
a
l
 
O
(
n
)
 
r
e
s
i
z
e
;
 
b
e
t
t
e
r


 
 
 
 
 
 
 
 
 
 
c
a
c
h
e
 
l
o
c
a
l
i
t
y
.
 
L
i
n
k
e
d
 
l
i
s
t
:
 
t
r
u
e
 
O
(
1
)
 
w
i
t
h
 
n
o
 
r
e
s
i
z
i
n
g
,
 
b
u
t
 
o
n
e
 
h
e
a
p
 
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
 
p
e
r
 
p
u
s
h


 
 
 
 
 
 
 
 
 
 
a
n
d
 
p
o
i
n
t
e
r
-
c
h
a
s
i
n
g
 
c
a
c
h
e
 
m
i
s
s
e
s
.
 
I
n
 
p
r
a
c
t
i
c
e
 
(
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
 
A
r
r
a
y
D
e
q
u
e
)
,
 
t
h
e
 
a
r
r
a
y
 
v
e
r
s
i
o
n


 
 
 
 
 
 
 
 
 
 
w
i
n
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


/
*
 
 
R
o
o
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
2
_
S
t
a
c
k
s
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
A
 
s
t
a
c
k
 
f
o
l
l
o
w
s
 
w
h
i
c
h
 
o
r
d
e
r
i
n
g
 
p
r
i
n
c
i
p
l
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
F
i
r
s
t
 
I
n
 
F
i
r
s
t
 
O
u
t
"
,
 
"
L
a
s
t
 
I
n
 
F
i
r
s
t
 
O
u
t
"
,
 
"
P
r
i
o
r
i
t
y
 
b
a
s
e
d
"
,
 
"
R
a
n
d
o
m
 
a
c
c
e
s
s
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
L
I
F
O
,
 
t
h
e
 
m
o
s
t
 
r
e
c
e
n
t
l
y
 
p
u
s
h
e
d
 
e
l
e
m
e
n
t
 
i
s
 
a
l
w
a
y
s
 
t
h
e
 
f
i
r
s
t
 
t
o
 
b
e
 
p
o
p
p
e
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
F
o
r
 
t
h
e
 
s
t
r
i
n
g
 
'
(
)
{
}
[
]
'
,
 
a
f
t
e
r
 
p
r
o
c
e
s
s
i
n
g
 
a
l
l
 
c
h
a
r
a
c
t
e
r
s
,
 
t
h
e
 
s
t
a
c
k
 
c
o
n
t
a
i
n
s
 
h
o
w
 
m
a
n
y
 
e
l
e
m
e
n
t
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
0
"
,
 
"
3
"
,
 
"
6
"
,
 
"
D
e
p
e
n
d
s
 
o
n
 
o
r
d
e
r
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
 
0
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
v
e
r
y
 
o
p
e
n
i
n
g
 
b
r
a
c
k
e
t
 
i
s
 
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
 
m
a
t
c
h
e
d
 
b
y
 
i
t
s
 
c
l
o
s
i
n
g
 
p
a
r
t
n
e
r
 
i
n
 
t
h
i
s
 
s
t
r
i
n
g
,
 
p
u
s
h
e
s
 
a
n
d
 
p
o
p
s
 
b
a
l
a
n
c
e
.
 
F
i
n
a
l
 
s
t
a
c
k
 
i
s
 
e
m
p
t
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
 
'
i
s
B
a
l
a
n
c
e
d
(
"
(
[
)
]
"
)
 
r
e
t
u
r
n
s
?
'
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
t
r
u
e
 
-
 
c
o
u
n
t
s
 
m
a
t
c
h
"
,
 
"
f
a
l
s
e
 
-
 
o
r
d
e
r
 
m
i
s
m
a
t
c
h
e
s
"
,
 
"
t
r
u
e
 
-
 
s
a
m
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
U
n
d
e
f
i
n
e
d
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
W
h
e
n
 
'
)
'
 
a
r
r
i
v
e
s
,
 
t
o
p
 
i
s
 
'
[
'
,
 
t
y
p
e
s
 
d
o
n
'
t
 
m
a
t
c
h
.
 
C
o
u
n
t
i
n
g
 
a
l
o
n
e
 
i
s
 
n
o
t
 
e
n
o
u
g
h
;
 
n
e
s
t
i
n
g
 
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
 
c
h
e
c
k
i
n
g
 
b
a
l
a
n
c
e
d
 
b
r
a
c
k
e
t
s
 
o
n
 
a
 
l
e
n
g
t
h
-
n
 
s
t
r
i
n
g
 
u
s
i
n
g
 
a
 
s
t
a
c
k
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
 
p
u
s
h
e
d
 
a
t
 
m
o
s
t
 
o
n
c
e
 
a
n
d
 
p
o
p
p
e
d
 
a
t
 
m
o
s
t
 
o
n
c
e
,
 
O
(
n
)
 
t
o
t
a
l
.
 
S
t
a
c
k
 
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
 
a
r
e
 
O
(
1
)
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
t
a
c
k
s
"


 
 
 
 
 
 
l
e
v
e
l
=
{
2
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
1
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
 
p
a
r
e
n
t
h
e
s
e
s
,
 
n
e
x
t
-
g
r
e
a
t
e
r
-
e
l
e
m
e
n
t
,
 
m
i
n
-
s
t
a
c
k
 
a
r
e
 
s
t
a
p
l
e
s
 
o
f
 
t
e
c
h
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
s
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
Q
u
e
u
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


