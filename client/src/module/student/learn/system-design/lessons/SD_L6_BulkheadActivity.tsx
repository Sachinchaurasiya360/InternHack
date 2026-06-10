
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
E
f
f
e
c
t
,
 
u
s
e
S
t
a
t
e
,
 
t
y
p
e
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
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
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
,
 
m
o
t
i
o
n
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
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
 
G
l
o
b
e
,
 
L
a
y
o
u
t
G
r
i
d
,
 
P
a
u
s
e
,
 
P
l
a
y
,
 
R
o
t
a
t
e
C
c
w
,
 
S
k
u
l
l
 
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
 
E
n
g
i
n
e
e
r
i
n
g
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
 
f
r
o
m
 
"
@
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
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
 
t
y
p
e
 
{
 
E
n
g
T
a
b
D
e
f
,
 
E
n
g
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
 
}
 
f
r
o
m
 
"
@
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
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




c
o
n
s
t
 
S
D
 
=
 
"
#
8
4
c
c
1
6
"
;


c
o
n
s
t
 
N
E
U
T
R
A
L
 
=
 
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


c
o
n
s
t
 
W
A
R
N
 
=
 
"
#
f
5
9
e
0
b
"
;


c
o
n
s
t
 
P
U
R
P
L
E
 
=
 
"
#
8
b
5
c
f
6
"
;


c
o
n
s
t
 
M
O
N
O
 
=
 
'
"
J
e
t
B
r
a
i
n
s
 
M
o
n
o
"
,
 
M
e
n
l
o
,
 
C
o
n
s
o
l
a
s
,
 
m
o
n
o
s
p
a
c
e
'
;




c
o
n
s
t
 
s
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
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
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
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,
 
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
:
 
7
0
0
,
 
f
o
n
t
S
i
z
e
:
 
"
1
.
1
5
r
e
m
"
,


 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
m
a
r
g
i
n
:
 
"
0
 
0
 
1
2
p
x
"
,


}
;


c
o
n
s
t
 
s
e
c
t
i
o
n
D
e
s
c
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
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
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
2
r
e
m
"
,


 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
m
a
r
g
i
n
:
 
"
0
 
0
 
2
0
p
x
"
,
 
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
.
6
5
,


}
;




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
1
 
-
 
D
e
f
i
n
i
t
i
o
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
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
e
f
i
n
i
t
i
o
n
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
C
o
m
p
a
r
t
m
e
n
t
s
 
i
n
 
a
 
s
h
i
p
&
r
s
q
u
o
;
s
 
h
u
l
l
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
A
 
b
u
l
k
h
e
a
d
 
i
s
 
a
 
p
h
y
s
i
c
a
l
 
w
a
l
l
 
i
n
 
a
 
s
h
i
p
 
t
h
a
t
 
s
t
o
p
s
 
o
n
e
 
f
l
o
o
d
e
d
 
c
o
m
p
a
r
t
m
e
n
t
 
f
r
o
m
 
s
i
n
k
i
n
g
 
t
h
e


 
 
 
 
 
 
 
 
w
h
o
l
e
 
v
e
s
s
e
l
.
 
I
n
 
s
o
f
t
w
a
r
e
,
 
a
 
<
b
>
b
u
l
k
h
e
a
d
<
/
b
>
 
p
a
r
t
i
t
i
o
n
s
 
r
e
s
o
u
r
c
e
s
 
(
t
h
r
e
a
d
 
p
o
o
l
s
,
 
c
o
n
n
e
c
t
i
o
n


 
 
 
 
 
 
 
 
p
o
o
l
s
,
 
m
e
m
o
r
y
)
 
s
o
 
a
 
s
l
o
w
 
o
r
 
f
a
i
l
i
n
g
 
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
 
c
a
n
&
r
s
q
u
o
;
t
 
e
x
h
a
u
s
t
 
t
h
e
m
 
a
l
l
 
a
n
d
 
t
a
k
e
 
t
h
e
 
e
n
t
i
r
e


 
 
 
 
 
 
 
 
s
e
r
v
i
c
e
 
d
o
w
n
.


 
 
 
 
 
 
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
 
m
d
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
 
m
b
-
6
"
>


 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
n
a
m
e
:
 
"
S
h
a
r
e
d
 
p
o
o
l
 
(
n
o
 
b
u
l
k
h
e
a
d
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
W
A
R
N
,


 
 
 
 
 
 
 
 
 
 
 
 
t
a
g
l
i
n
e
:
 
"
O
n
e
 
p
o
o
l
,
 
a
l
l
 
c
a
l
l
e
r
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
b
l
e
m
:
 
"
W
h
e
n
 
o
n
e
 
d
o
w
n
s
t
r
e
a
m
 
s
t
a
l
l
s
,
 
e
v
e
r
y
 
t
h
r
e
a
d
 
b
l
o
c
k
s
 
w
a
i
t
i
n
g
 
f
o
r
 
i
t
.
 
H
e
a
l
t
h
y
 
t
r
a
f
f
i
c
 
t
o
 
o
t
h
e
r
 
d
o
w
n
s
t
r
e
a
m
s
 
n
o
w
 
a
l
s
o
 
f
a
i
l
s
 
b
e
c
a
u
s
e
 
t
h
e
r
e
 
a
r
e
 
n
o
 
t
h
r
e
a
d
s
 
l
e
f
t
.
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
n
a
m
e
:
 
"
P
e
r
-
d
o
w
n
s
t
r
e
a
m
 
b
u
l
k
h
e
a
d
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
S
D
,


 
 
 
 
 
 
 
 
 
 
 
 
t
a
g
l
i
n
e
:
 
"
O
n
e
 
p
o
o
l
 
p
e
r
 
d
o
w
n
s
t
r
e
a
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
b
l
e
m
:
 
"
A
 
s
t
a
l
l
e
d
 
d
o
w
n
s
t
r
e
a
m
 
o
n
l
y
 
f
i
l
l
s
 
i
t
s
 
o
w
n
 
p
o
o
l
.
 
O
t
h
e
r
 
d
o
w
n
s
t
r
e
a
m
s
 
k
e
e
p
 
t
h
e
i
r
 
t
h
r
e
a
d
s
.
 
F
a
i
l
u
r
e
 
i
s
 
c
o
n
t
a
i
n
e
d
 
t
o
 
t
h
a
t
 
o
n
e
 
l
a
n
e
.
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]
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
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
p
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
5
,
 
d
e
l
a
y
:
 
i
 
*
 
0
.
1
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
6
p
x
 
1
8
p
x
"
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
.
5
p
x
 
s
o
l
i
d
 
$
{
p
.
c
o
l
o
r
}
5
5
`
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
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
 
`
$
{
p
.
c
o
l
o
r
}
0
8
`
,
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,
 
g
a
p
:
 
1
0
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
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
:
 
7
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
1
r
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
>
{
p
.
n
a
m
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
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
c
o
l
o
r
:
 
p
.
c
o
l
o
r
,
 
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
:
 
7
0
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
t
a
g
l
i
n
e
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
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
6
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
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
.
6
 
}
}
>
{
p
.
p
r
o
b
l
e
m
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
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
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
 
}
}
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
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
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
R
E
A
L
 
E
X
A
M
P
L
E
S


 
 
 
 
 
 
 
 
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
 
"
0
.
8
6
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
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
.
7
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
b
>
H
y
s
t
r
i
x
<
/
b
>
 
m
a
d
e
 
b
u
l
k
h
e
a
d
s
 
p
o
p
 
b
y
 
g
i
v
i
n
g
 
e
a
c
h
 
d
o
w
n
s
t
r
e
a
m
 
i
t
s
 
o
w
n
 
t
h
r
e
a
d
 
p
o
o
l
 
w
i
t
h


 
 
 
 
 
 
 
 
 
 
c
o
n
f
i
g
u
r
a
b
l
e
 
s
i
z
e
 
a
n
d
 
q
u
e
u
e
.
 
<
b
>
R
e
s
i
l
i
e
n
c
e
4
j
<
/
b
>
 
s
h
i
p
s
 
t
h
e
m
 
i
n
 
s
e
m
a
p
h
o
r
e
 
a
n
d
 
t
h
r
e
a
d
-
p
o
o
l


 
 
 
 
 
 
 
 
 
 
f
l
a
v
o
r
s
.
 
<
b
>
E
n
v
o
y
<
/
b
>
 
e
x
p
o
s
e
s
 
p
e
r
-
c
l
u
s
t
e
r
 
c
o
n
n
e
c
t
i
o
n
 
p
o
o
l
s
 
a
t
 
t
h
e
 
p
r
o
x
y
.
 
T
h
e
 
p
a
t
t
e
r
n


 
 
 
 
 
 
 
 
 
 
g
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
:
 
s
e
p
a
r
a
t
e
 
P
o
s
t
g
r
e
s
 
c
o
n
n
e
c
t
i
o
n
 
p
o
o
l
s
 
p
e
r
 
w
o
r
k
l
o
a
d
,
 
s
e
p
a
r
a
t
e
 
R
e
d
i
s
 
d
a
t
a
b
a
s
e
s


 
 
 
 
 
 
 
 
 
 
p
e
r
 
u
s
e
 
c
a
s
e
,
 
s
e
p
a
r
a
t
e
 
K
8
s
 
n
o
d
e
 
p
o
o
l
s
 
p
e
r
 
s
e
r
v
i
c
e
 
t
i
e
r
.


 
 
 
 
 
 
 
 
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


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
2
 
-
 
A
n
i
m
a
t
e
d
 
t
h
r
e
a
d
 
p
o
o
l
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
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
s
h
a
r
e
d
"
 
|
 
"
b
u
l
k
h
e
a
d
e
d
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
 
S
l
o
t
 
{


 
 
b
u
s
y
:
 
b
o
o
l
e
a
n
;


 
 
d
o
w
n
s
t
r
e
a
m
:
 
"
b
i
l
l
i
n
g
"
 
|
 
"
s
e
a
r
c
h
"
 
|
 
"
r
e
c
s
"
 
|
 
n
u
l
l
;


 
 
/
*
*
 
w
h
e
n
 
b
u
s
y
,
 
m
s
 
r
e
m
a
i
n
i
n
g
 
b
e
f
o
r
e
 
s
l
o
t
 
f
r
e
e
s
 
*
/


 
 
r
e
m
a
i
n
i
n
g
M
s
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
 
P
O
O
L
_
S
I
Z
E
 
=
 
1
2
;


c
o
n
s
t
 
T
I
C
K
_
M
S
 
=
 
1
0
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
 
B
u
l
k
h
e
a
d
D
e
m
o
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
s
h
a
r
e
d
"
)
;


 
 
c
o
n
s
t
 
[
b
i
l
l
i
n
g
S
l
o
w
,
 
s
e
t
B
i
l
l
i
n
g
S
l
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
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
r
u
n
n
i
n
g
,
 
s
e
t
R
u
n
n
i
n
g
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
t
r
u
e
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
a
r
e
d
,
 
s
e
t
S
h
a
r
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
S
l
o
t
[
]
>
(
(
)
 
=
>
 
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
 
P
O
O
L
_
S
I
Z
E
 
}
,
 
(
)
 
=
>
 
(
{
 
b
u
s
y
:
 
f
a
l
s
e
,
 
d
o
w
n
s
t
r
e
a
m
:
 
n
u
l
l
,
 
r
e
m
a
i
n
i
n
g
M
s
:
 
0
 
}
)
)
)
;


 
 
c
o
n
s
t
 
[
b
i
l
l
i
n
g
P
o
o
l
,
 
s
e
t
B
i
l
l
i
n
g
P
o
o
l
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
S
l
o
t
[
]
>
(
(
)
 
=
>
 
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
 
4
 
}
,
 
(
)
 
=
>
 
(
{
 
b
u
s
y
:
 
f
a
l
s
e
,
 
d
o
w
n
s
t
r
e
a
m
:
 
n
u
l
l
,
 
r
e
m
a
i
n
i
n
g
M
s
:
 
0
 
}
)
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
e
a
r
c
h
P
o
o
l
,
 
s
e
t
S
e
a
r
c
h
P
o
o
l
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
S
l
o
t
[
]
>
(
(
)
 
=
>
 
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
 
4
 
}
,
 
(
)
 
=
>
 
(
{
 
b
u
s
y
:
 
f
a
l
s
e
,
 
d
o
w
n
s
t
r
e
a
m
:
 
n
u
l
l
,
 
r
e
m
a
i
n
i
n
g
M
s
:
 
0
 
}
)
)
)
;


 
 
c
o
n
s
t
 
[
r
e
c
s
P
o
o
l
,
 
s
e
t
R
e
c
s
P
o
o
l
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
S
l
o
t
[
]
>
(
(
)
 
=
>
 
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
 
4
 
}
,
 
(
)
 
=
>
 
(
{
 
b
u
s
y
:
 
f
a
l
s
e
,
 
d
o
w
n
s
t
r
e
a
m
:
 
n
u
l
l
,
 
r
e
m
a
i
n
i
n
g
M
s
:
 
0
 
}
)
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
t
a
t
s
,
 
s
e
t
S
t
a
t
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
(
{


 
 
 
 
b
i
l
l
i
n
g
:
 
{
 
o
k
:
 
0
,
 
r
e
j
e
c
t
e
d
:
 
0
 
}
,


 
 
 
 
s
e
a
r
c
h
:
 
{
 
o
k
:
 
0
,
 
r
e
j
e
c
t
e
d
:
 
0
 
}
,


 
 
 
 
r
e
c
s
:
 
{
 
o
k
:
 
0
,
 
r
e
j
e
c
t
e
d
:
 
0
 
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
 
r
e
s
e
t
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
S
h
a
r
e
d
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
 
P
O
O
L
_
S
I
Z
E
 
}
,
 
(
)
 
=
>
 
(
{
 
b
u
s
y
:
 
f
a
l
s
e
,
 
d
o
w
n
s
t
r
e
a
m
:
 
n
u
l
l
,
 
r
e
m
a
i
n
i
n
g
M
s
:
 
0
 
}
)
)
)
;


 
 
 
 
s
e
t
B
i
l
l
i
n
g
P
o
o
l
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
 
4
 
}
,
 
(
)
 
=
>
 
(
{
 
b
u
s
y
:
 
f
a
l
s
e
,
 
d
o
w
n
s
t
r
e
a
m
:
 
n
u
l
l
,
 
r
e
m
a
i
n
i
n
g
M
s
:
 
0
 
}
)
)
)
;


 
 
 
 
s
e
t
S
e
a
r
c
h
P
o
o
l
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
 
4
 
}
,
 
(
)
 
=
>
 
(
{
 
b
u
s
y
:
 
f
a
l
s
e
,
 
d
o
w
n
s
t
r
e
a
m
:
 
n
u
l
l
,
 
r
e
m
a
i
n
i
n
g
M
s
:
 
0
 
}
)
)
)
;


 
 
 
 
s
e
t
R
e
c
s
P
o
o
l
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
 
4
 
}
,
 
(
)
 
=
>
 
(
{
 
b
u
s
y
:
 
f
a
l
s
e
,
 
d
o
w
n
s
t
r
e
a
m
:
 
n
u
l
l
,
 
r
e
m
a
i
n
i
n
g
M
s
:
 
0
 
}
)
)
)
;


 
 
 
 
s
e
t
S
t
a
t
s
(
{
 
b
i
l
l
i
n
g
:
 
{
 
o
k
:
 
0
,
 
r
e
j
e
c
t
e
d
:
 
0
 
}
,
 
s
e
a
r
c
h
:
 
{
 
o
k
:
 
0
,
 
r
e
j
e
c
t
e
d
:
 
0
 
}
,
 
r
e
c
s
:
 
{
 
o
k
:
 
0
,
 
r
e
j
e
c
t
e
d
:
 
0
 
}
 
}
)
;


 
 
}
;




 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
r
u
n
n
i
n
g
)
 
r
e
t
u
r
n
;


 
 
 
 
c
o
n
s
t
 
h
a
n
d
l
e
 
=
 
s
e
t
I
n
t
e
r
v
a
l
(
(
)
 
=
>
 
{


 
 
 
 
 
 
/
/
 
D
e
c
r
e
m
e
n
t
 
t
i
m
e
r
s
 
o
n
 
a
l
l
 
s
l
o
t
s
 
a
n
d
 
f
r
e
e
 
c
o
m
p
l
e
t
e
d
 
o
n
e
s


 
 
 
 
 
 
c
o
n
s
t
 
t
i
c
k
P
o
o
l
 
=
 
(
p
o
o
l
:
 
S
l
o
t
[
]
)
:
 
S
l
o
t
[
]
 
=
>


 
 
 
 
 
 
 
 
p
o
o
l
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
 
{


 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
s
.
b
u
s
y
)
 
r
e
t
u
r
n
 
s
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
e
m
 
=
 
s
.
r
e
m
a
i
n
i
n
g
M
s
 
-
 
T
I
C
K
_
M
S
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
r
e
m
 
<
=
 
0
)
 
r
e
t
u
r
n
 
{
 
b
u
s
y
:
 
f
a
l
s
e
,
 
d
o
w
n
s
t
r
e
a
m
:
 
n
u
l
l
,
 
r
e
m
a
i
n
i
n
g
M
s
:
 
0
 
}
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
{
 
.
.
.
s
,
 
r
e
m
a
i
n
i
n
g
M
s
:
 
r
e
m
 
}
;


 
 
 
 
 
 
 
 
}
)
;




 
 
 
 
 
 
/
/
 
P
i
c
k
 
a
 
d
o
w
n
s
t
r
e
a
m
 
t
o
 
c
a
l
l
 
t
h
i
s
 
t
i
c
k
 
(
r
o
u
n
d
-
r
o
b
i
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
 
t
h
r
e
e
)


 
 
 
 
 
 
c
o
n
s
t
 
d
o
w
n
s
t
r
e
a
m
s
:
 
S
l
o
t
[
"
d
o
w
n
s
t
r
e
a
m
"
]
[
]
 
=
 
[
"
b
i
l
l
i
n
g
"
,
 
"
s
e
a
r
c
h
"
,
 
"
r
e
c
s
"
]
;


 
 
 
 
 
 
c
o
n
s
t
 
p
i
c
k
 
=
 
d
o
w
n
s
t
r
e
a
m
s
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
 
3
)
]
 
a
s
 
E
x
c
l
u
d
e
<
S
l
o
t
[
"
d
o
w
n
s
t
r
e
a
m
"
]
,
 
n
u
l
l
>
;


 
 
 
 
 
 
/
/
 
D
u
r
a
t
i
o
n
 
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
l
o
w
n
e
s
s


 
 
 
 
 
 
c
o
n
s
t
 
b
a
s
e
D
u
r
 
=
 
p
i
c
k
 
=
=
=
 
"
b
i
l
l
i
n
g
"
 
&
&
 
b
i
l
l
i
n
g
S
l
o
w
 
?
 
4
0
0
0
 
:
 
6
0
0
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
s
h
a
r
e
d
"
)
 
{


 
 
 
 
 
 
 
 
s
e
t
S
h
a
r
e
d
(
(
p
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
i
c
k
e
d
 
=
 
t
i
c
k
P
o
o
l
(
p
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
d
x
 
=
 
t
i
c
k
e
d
.
f
i
n
d
I
n
d
e
x
(
(
s
)
 
=
>
 
!
s
.
b
u
s
y
)
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
 
-
1
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
S
t
a
t
s
(
(
s
t
)
 
=
>
 
(
{
 
.
.
.
s
t
,
 
[
p
i
c
k
]
:
 
{
 
.
.
.
s
t
[
p
i
c
k
]
,
 
r
e
j
e
c
t
e
d
:
 
s
t
[
p
i
c
k
]
.
r
e
j
e
c
t
e
d
 
+
 
1
 
}
 
}
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
t
i
c
k
e
d
;


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
t
i
c
k
e
d
[
i
d
x
]
 
=
 
{
 
b
u
s
y
:
 
t
r
u
e
,
 
d
o
w
n
s
t
r
e
a
m
:
 
p
i
c
k
,
 
r
e
m
a
i
n
i
n
g
M
s
:
 
b
a
s
e
D
u
r
 
}
;


 
 
 
 
 
 
 
 
 
 
s
e
t
S
t
a
t
s
(
(
s
t
)
 
=
>
 
(
{
 
.
.
.
s
t
,
 
[
p
i
c
k
]
:
 
{
 
.
.
.
s
t
[
p
i
c
k
]
,
 
o
k
:
 
s
t
[
p
i
c
k
]
.
o
k
 
+
 
1
 
}
 
}
)
)
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
t
i
c
k
e
d
;


 
 
 
 
 
 
 
 
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
e
t
t
e
r
 
=
 
p
i
c
k
 
=
=
=
 
"
b
i
l
l
i
n
g
"
 
?
 
s
e
t
B
i
l
l
i
n
g
P
o
o
l
 
:
 
p
i
c
k
 
=
=
=
 
"
s
e
a
r
c
h
"
 
?
 
s
e
t
S
e
a
r
c
h
P
o
o
l
 
:
 
s
e
t
R
e
c
s
P
o
o
l
;


 
 
 
 
 
 
 
 
s
e
t
t
e
r
(
(
p
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
i
c
k
e
d
 
=
 
t
i
c
k
P
o
o
l
(
p
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
d
x
 
=
 
t
i
c
k
e
d
.
f
i
n
d
I
n
d
e
x
(
(
s
)
 
=
>
 
!
s
.
b
u
s
y
)
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
 
-
1
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
S
t
a
t
s
(
(
s
t
)
 
=
>
 
(
{
 
.
.
.
s
t
,
 
[
p
i
c
k
]
:
 
{
 
.
.
.
s
t
[
p
i
c
k
]
,
 
r
e
j
e
c
t
e
d
:
 
s
t
[
p
i
c
k
]
.
r
e
j
e
c
t
e
d
 
+
 
1
 
}
 
}
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
t
i
c
k
e
d
;


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
t
i
c
k
e
d
[
i
d
x
]
 
=
 
{
 
b
u
s
y
:
 
t
r
u
e
,
 
d
o
w
n
s
t
r
e
a
m
:
 
p
i
c
k
,
 
r
e
m
a
i
n
i
n
g
M
s
:
 
b
a
s
e
D
u
r
 
}
;


 
 
 
 
 
 
 
 
 
 
s
e
t
S
t
a
t
s
(
(
s
t
)
 
=
>
 
(
{
 
.
.
.
s
t
,
 
[
p
i
c
k
]
:
 
{
 
.
.
.
s
t
[
p
i
c
k
]
,
 
o
k
:
 
s
t
[
p
i
c
k
]
.
o
k
 
+
 
1
 
}
 
}
)
)
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
t
i
c
k
e
d
;


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
/
/
 
t
i
c
k
 
t
h
e
 
o
t
h
e
r
 
t
w
o
 
p
o
o
l
s
 
t
o
o


 
 
 
 
 
 
 
 
i
f
 
(
p
i
c
k
 
!
=
=
 
"
b
i
l
l
i
n
g
"
)
 
s
e
t
B
i
l
l
i
n
g
P
o
o
l
(
(
p
)
 
=
>
 
t
i
c
k
P
o
o
l
(
p
)
)
;


 
 
 
 
 
 
 
 
i
f
 
(
p
i
c
k
 
!
=
=
 
"
s
e
a
r
c
h
"
)
 
s
e
t
S
e
a
r
c
h
P
o
o
l
(
(
p
)
 
=
>
 
t
i
c
k
P
o
o
l
(
p
)
)
;


 
 
 
 
 
 
 
 
i
f
 
(
p
i
c
k
 
!
=
=
 
"
r
e
c
s
"
)
 
s
e
t
R
e
c
s
P
o
o
l
(
(
p
)
 
=
>
 
t
i
c
k
P
o
o
l
(
p
)
)
;


 
 
 
 
 
 
}


 
 
 
 
}
,
 
T
I
C
K
_
M
S
)
;


 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
h
a
n
d
l
e
)
;


 
 
}
,
 
[
r
u
n
n
i
n
g
,
 
m
o
d
e
,
 
b
i
l
l
i
n
g
S
l
o
w
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
d
i
v
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
S
l
o
w
 
d
o
w
n
 
b
i
l
l
i
n
g
.
 
W
a
t
c
h
 
s
e
a
r
c
h
 
a
n
d
 
r
e
c
s
.
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
T
h
r
e
e
 
d
o
w
n
s
t
r
e
a
m
s
 
(
b
i
l
l
i
n
g
,
 
s
e
a
r
c
h
,
 
r
e
c
s
)
 
s
h
a
r
i
n
g
 
o
r
 
p
a
r
t
i
t
i
o
n
i
n
g
 
t
h
r
e
a
d
 
p
o
o
l
s
.
 
T
o
g
g
l
e


 
 
 
 
 
 
 
 
b
i
l
l
i
n
g
-
s
l
o
w
 
t
o
 
i
n
j
e
c
t
 
4
-
s
e
c
o
n
d
 
l
a
t
e
n
c
y
.
 
I
n
 
s
h
a
r
e
d
 
m
o
d
e
,
 
b
i
l
l
i
n
g
&
r
s
q
u
o
;
s
 
t
h
r
e
a
d
s
 
f
i
l
l
 
t
h
e
 
e
n
t
i
r
e


 
 
 
 
 
 
 
 
p
o
o
l
 
—
 
s
e
a
r
c
h
 
a
n
d
 
r
e
c
s
 
s
t
a
r
t
 
g
e
t
t
i
n
g
 
r
e
j
e
c
t
e
d
.
 
I
n
 
b
u
l
k
h
e
a
d
e
d
 
m
o
d
e
,
 
b
i
l
l
i
n
g
 
o
n
l
y
 
f
i
l
l
s
 
i
t
s


 
 
 
 
 
 
 
 
o
w
n
 
l
a
n
e
.


 
 
 
 
 
 
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
 
m
b
-
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


 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>
m
o
d
e
:
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
{
(
[
"
s
h
a
r
e
d
"
,
 
"
b
u
l
k
h
e
a
d
e
d
"
]
 
a
s
 
M
o
d
e
[
]
)
.
m
a
p
(
(
m
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
c
t
i
v
e
 
=
 
m
o
d
e
 
=
=
=
 
m
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
m
 
=
=
=
 
"
s
h
a
r
e
d
"
 
?
 
W
A
R
N
 
:
 
S
D
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
m
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
;
 
r
e
s
e
t
(
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
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
.
5
p
x
 
s
o
l
i
d
 
$
{
a
c
t
i
v
e
 
?
 
c
 
:
 
"
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
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
 
a
c
t
i
v
e
 
?
 
`
$
{
c
}
1
8
`
 
:
 
"
t
r
a
n
s
p
a
r
e
n
t
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
a
c
t
i
v
e
 
?
 
c
 
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
M
O
N
O
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
7
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
6
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
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
 
f
l
e
x
:
 
1
 
}
}
 
/
>


 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
5
 
}
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
B
i
l
l
i
n
g
S
l
o
w
(
(
b
)
 
=
>
 
!
b
)
}


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
b
t
n
(
b
i
l
l
i
n
g
S
l
o
w
 
?
 
W
A
R
N
 
:
 
N
E
U
T
R
A
L
)
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
S
k
u
l
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
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
b
i
l
l
i
n
g
 
{
b
i
l
l
i
n
g
S
l
o
w
 
?
 
"
S
L
O
W
"
 
:
 
"
f
a
s
t
"
}


 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
b
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
 
"
#
0
b
1
2
2
0
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
,
 
p
a
d
d
i
n
g
:
 
2
2
 
}
}
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
s
h
a
r
e
d
"
 
?
 
(


 
 
 
 
 
 
 
 
 
 
<
P
o
o
l
 
n
a
m
e
=
"
S
h
a
r
e
d
 
p
o
o
l
 
·
 
1
2
 
t
h
r
e
a
d
s
 
·
 
a
l
l
 
d
o
w
n
s
t
r
e
a
m
s
"
 
p
o
o
l
=
{
s
h
a
r
e
d
}
 
t
o
t
a
l
S
i
z
e
=
{
P
O
O
L
_
S
I
Z
E
}
 
m
o
d
e
=
"
s
h
a
r
e
d
"
 
/
>


 
 
 
 
 
 
 
 
)
 
:
 
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
 
m
d
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
3
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
P
o
o
l
 
n
a
m
e
=
"
B
i
l
l
i
n
g
 
·
 
4
 
t
h
r
e
a
d
s
"
 
p
o
o
l
=
{
b
i
l
l
i
n
g
P
o
o
l
}
 
t
o
t
a
l
S
i
z
e
=
{
4
}
 
d
o
w
n
s
t
r
e
a
m
=
"
b
i
l
l
i
n
g
"
 
m
o
d
e
=
"
b
u
l
k
h
e
a
d
e
d
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
P
o
o
l
 
n
a
m
e
=
"
S
e
a
r
c
h
 
·
 
4
 
t
h
r
e
a
d
s
"
 
p
o
o
l
=
{
s
e
a
r
c
h
P
o
o
l
}
 
t
o
t
a
l
S
i
z
e
=
{
4
}
 
d
o
w
n
s
t
r
e
a
m
=
"
s
e
a
r
c
h
"
 
m
o
d
e
=
"
b
u
l
k
h
e
a
d
e
d
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
P
o
o
l
 
n
a
m
e
=
"
R
e
c
s
 
·
 
4
 
t
h
r
e
a
d
s
"
 
p
o
o
l
=
{
r
e
c
s
P
o
o
l
}
 
t
o
t
a
l
S
i
z
e
=
{
4
}
 
d
o
w
n
s
t
r
e
a
m
=
"
r
e
c
s
"
 
m
o
d
e
=
"
b
u
l
k
h
e
a
d
e
d
"
 
/
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
3
 
g
a
p
-
2
 
m
t
-
4
"
>


 
 
 
 
 
 
 
 
 
 
{
(
[
"
b
i
l
l
i
n
g
"
,
 
"
s
e
a
r
c
h
"
,
 
"
r
e
c
s
"
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
 
i
s
H
u
r
t
 
=
 
s
t
a
t
s
[
d
]
.
r
e
j
e
c
t
e
d
 
>
 
s
t
a
t
s
[
d
]
.
o
k
 
/
 
4
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
d
 
=
=
=
 
"
b
i
l
l
i
n
g
"
 
?
 
P
U
R
P
L
E
 
:
 
d
 
=
=
=
 
"
s
e
a
r
c
h
"
 
?
 
S
D
 
:
 
N
E
U
T
R
A
L
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
d
}
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
2
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
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
.
5
p
x
 
s
o
l
i
d
 
$
{
c
}
3
3
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
 
`
$
{
c
}
1
0
`
 
}
}
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
c
o
l
o
r
:
 
c
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
,
 
t
e
x
t
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
 
"
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
,
 
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
:
 
8
0
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
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
f
l
e
x
"
,
 
g
a
p
:
 
1
2
,
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
4
r
e
m
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
 
S
D
 
}
}
>
✓
 
{
s
t
a
t
s
[
d
]
.
o
k
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
 
i
s
H
u
r
t
 
?
 
W
A
R
N
 
:
 
N
E
U
T
R
A
L
 
}
}
>
✕
 
{
s
t
a
t
s
[
d
]
.
r
e
j
e
c
t
e
d
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
2
 
m
t
-
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


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
b
u
t
t
o
n
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
5
 
}
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
R
u
n
n
i
n
g
(
(
r
)
 
=
>
 
!
r
)
}
 
s
t
y
l
e
=
{
b
t
n
(
S
D
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
r
u
n
n
i
n
g
 
?
 
<
P
a
u
s
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
3
.
5
 
h
-
3
.
5
"
 
/
>
 
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
3
.
5
 
h
-
3
.
5
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
{
r
u
n
n
i
n
g
 
?
 
"
p
a
u
s
e
"
 
:
 
"
r
e
s
u
m
e
"
}


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
b
u
t
t
o
n
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
5
 
}
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
r
e
s
e
t
}
 
s
t
y
l
e
=
{
b
t
n
(
N
E
U
T
R
A
L
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
R
o
t
a
t
e
C
c
w
 
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
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
r
e
s
e
t


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
b
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




 
 
 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
m
o
d
e
=
"
w
a
i
t
"
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
`
$
{
m
o
d
e
}
-
$
{
b
i
l
l
i
n
g
S
l
o
w
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
6
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
-
6
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
3
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
m
a
r
g
i
n
T
o
p
:
 
1
4
,
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
"
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
 
"
r
g
b
a
(
1
5
,
2
3
,
4
2
,
0
.
6
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
6
r
e
m
"
,
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,
 
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
.
5
5
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
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
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
R
i
g
h
t
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
W
H
A
T
 
T
O
 
W
A
T
C
H


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
s
h
a
r
e
d
"
 
&
&
 
b
i
l
l
i
n
g
S
l
o
w
 
&
&
 
"
S
h
a
r
e
d
 
p
o
o
l
 
+
 
s
l
o
w
 
b
i
l
l
i
n
g
 
=
 
t
h
e
 
s
l
o
w
 
b
i
l
l
i
n
g
 
r
e
q
u
e
s
t
s
 
f
i
l
l
 
A
L
L
 
1
2
 
t
h
r
e
a
d
s
.
 
S
e
a
r
c
h
 
a
n
d
 
r
e
c
s
 
s
t
a
r
t
 
g
e
t
t
i
n
g
 
r
e
j
e
c
t
e
d
 
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
'
r
e
 
f
a
s
t
.
"
}


 
 
 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
s
h
a
r
e
d
"
 
&
&
 
!
b
i
l
l
i
n
g
S
l
o
w
 
&
&
 
"
S
h
a
r
e
d
 
p
o
o
l
,
 
a
l
l
 
h
e
a
l
t
h
y
.
 
T
h
e
 
p
o
o
l
 
d
r
a
i
n
s
 
f
a
s
t
 
a
n
d
 
r
e
j
e
c
t
i
o
n
 
r
a
t
e
s
 
a
r
e
 
l
o
w
.
 
L
o
o
k
s
 
f
i
n
e
 
—
 
u
n
t
i
l
 
s
o
m
e
t
h
i
n
g
 
s
l
o
w
s
 
d
o
w
n
.
"
}


 
 
 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
b
u
l
k
h
e
a
d
e
d
"
 
&
&
 
b
i
l
l
i
n
g
S
l
o
w
 
&
&
 
"
B
u
l
k
h
e
a
d
e
d
 
+
 
s
l
o
w
 
b
i
l
l
i
n
g
 
=
 
o
n
l
y
 
t
h
e
 
b
i
l
l
i
n
g
 
l
a
n
e
 
(
4
 
t
h
r
e
a
d
s
)
 
g
e
t
s
 
c
l
o
g
g
e
d
.
 
S
e
a
r
c
h
 
a
n
d
 
r
e
c
s
 
r
u
n
 
u
n
i
m
p
e
d
e
d
.
"
}


 
 
 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
b
u
l
k
h
e
a
d
e
d
"
 
&
&
 
!
b
i
l
l
i
n
g
S
l
o
w
 
&
&
 
"
B
u
l
k
h
e
a
d
e
d
 
a
n
d
 
h
e
a
l
t
h
y
.
 
E
a
c
h
 
d
o
w
n
s
t
r
e
a
m
 
h
a
s
 
i
t
s
 
o
w
n
 
l
a
n
e
.
 
T
o
t
a
l
 
c
a
p
a
c
i
t
y
 
i
s
 
t
h
e
 
s
a
m
e
;
 
i
s
o
l
a
t
i
o
n
 
i
s
 
t
h
e
 
w
i
n
.
"
}


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
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
 
P
o
o
l
(
{
 
n
a
m
e
,
 
p
o
o
l
,
 
t
o
t
a
l
S
i
z
e
,
 
d
o
w
n
s
t
r
e
a
m
,
 
m
o
d
e
 
}
:
 
{
 
n
a
m
e
:
 
s
t
r
i
n
g
;
 
p
o
o
l
:
 
S
l
o
t
[
]
;
 
t
o
t
a
l
S
i
z
e
:
 
n
u
m
b
e
r
;
 
d
o
w
n
s
t
r
e
a
m
?
:
 
S
l
o
t
[
"
d
o
w
n
s
t
r
e
a
m
"
]
;
 
m
o
d
e
:
 
M
o
d
e
 
}
)
 
{


 
 
c
o
n
s
t
 
b
u
s
y
 
=
 
p
o
o
l
.
f
i
l
t
e
r
(
(
s
)
 
=
>
 
s
.
b
u
s
y
)
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
 
h
e
a
d
e
r
C
o
l
o
r
 
=
 
d
o
w
n
s
t
r
e
a
m
 
=
=
=
 
"
b
i
l
l
i
n
g
"
 
?
 
P
U
R
P
L
E
 
:
 
d
o
w
n
s
t
r
e
a
m
 
=
=
=
 
"
s
e
a
r
c
h
"
 
?
 
S
D
 
:
 
d
o
w
n
s
t
r
e
a
m
 
=
=
=
 
"
r
e
c
s
"
 
?
 
N
E
U
T
R
A
L
 
:
 
S
D
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
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
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
.
5
p
x
 
s
o
l
i
d
 
$
{
h
e
a
d
e
r
C
o
l
o
r
}
3
3
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
 
`
$
{
h
e
a
d
e
r
C
o
l
o
r
}
0
8
`
 
}
}
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
f
l
e
x
"
,
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
s
p
a
c
e
-
b
e
t
w
e
e
n
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
4
r
e
m
"
,
 
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
:
 
7
0
0
,
 
c
o
l
o
r
:
 
h
e
a
d
e
r
C
o
l
o
r
 
}
}
>
{
n
a
m
e
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
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
b
u
s
y
}
 
/
 
{
t
o
t
a
l
S
i
z
e
}
 
b
u
s
y


 
 
 
 
 
 
 
 
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
r
e
p
e
a
t
(
$
{
M
a
t
h
.
m
i
n
(
t
o
t
a
l
S
i
z
e
,
 
6
)
}
,
 
1
f
r
)
`
,


 
 
 
 
 
 
 
 
g
a
p
:
 
4
,


 
 
 
 
 
 
}
}
>


 
 
 
 
 
 
 
 
{
p
o
o
l
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
 
{


 
 
 
 
 
 
 
 
 
 
l
e
t
 
c
 
=
 
N
E
U
T
R
A
L
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
s
.
b
u
s
y
 
&
&
 
m
o
d
e
 
=
=
=
 
"
s
h
a
r
e
d
"
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
 
=
 
s
.
d
o
w
n
s
t
r
e
a
m
 
=
=
=
 
"
b
i
l
l
i
n
g
"
 
?
 
P
U
R
P
L
E
 
:
 
s
.
d
o
w
n
s
t
r
e
a
m
 
=
=
=
 
"
s
e
a
r
c
h
"
 
?
 
S
D
 
:
 
N
E
U
T
R
A
L
;


 
 
 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
s
.
b
u
s
y
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
 
=
 
h
e
a
d
e
r
C
o
l
o
r
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
m
o
t
i
o
n
.
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
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
C
o
l
o
r
:
 
s
.
b
u
s
y
 
?
 
`
$
{
c
}
3
3
`
 
:
 
"
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
0
8
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
C
o
l
o
r
:
 
s
.
b
u
s
y
 
?
 
c
 
:
 
"
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
2
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
1
8
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
3
2
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
4
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
M
O
N
O
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
7
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
s
.
b
u
s
y
 
?
 
c
 
:
 
N
E
U
T
R
A
L
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
b
u
s
y
 
?
 
(
s
.
d
o
w
n
s
t
r
e
a
m
 
?
?
 
"
·
"
)
.
s
l
i
c
e
(
0
,
 
3
)
 
:
 
"
·
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
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




f
u
n
c
t
i
o
n
 
b
t
n
(
c
o
l
o
r
:
 
s
t
r
i
n
g
)
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
{


 
 
r
e
t
u
r
n
 
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
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
6
,


 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
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
.
5
p
x
 
s
o
l
i
d
 
$
{
c
o
l
o
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
 
`
$
{
c
o
l
o
r
}
1
8
`
,
 
c
o
l
o
r
,


 
 
 
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
2
r
e
m
"
,
 
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
:
 
7
0
0
,


 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
t
e
x
t
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
 
"
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
,


 
 
}
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
3
 
-
 
W
h
e
r
e
 
e
l
s
e
 
b
u
l
k
h
e
a
d
s
 
a
p
p
l
y
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




c
o
n
s
t
 
P
L
A
C
E
S
 
=
 
[


 
 
{
 
k
:
 
"
T
h
r
e
a
d
 
/
 
c
o
n
n
e
c
t
i
o
n
 
p
o
o
l
s
"
,
 
v
:
 
"
P
e
r
-
d
o
w
n
s
t
r
e
a
m
 
p
o
o
l
s
 
s
o
 
a
 
s
l
o
w
 
A
P
I
 
d
o
e
s
n
'
t
 
c
h
o
k
e
 
t
h
e
 
w
h
o
l
e
 
s
e
r
v
i
c
e
.
"
,
 
e
x
:
 
"
H
y
s
t
r
i
x
,
 
R
e
s
i
l
i
e
n
c
e
4
j
 
t
h
r
e
a
d
-
p
o
o
l
 
b
u
l
k
h
e
a
d
s
.
"
 
}
,


 
 
{
 
k
:
 
"
D
B
 
c
o
n
n
e
c
t
i
o
n
 
p
o
o
l
s
"
,
 
v
:
 
"
S
e
p
a
r
a
t
e
 
p
o
o
l
s
 
p
e
r
 
w
o
r
k
l
o
a
d
 
c
l
a
s
s
 
(
t
r
a
n
s
a
c
t
i
o
n
a
l
 
r
e
a
d
s
,
 
a
n
a
l
y
t
i
c
s
,
 
b
a
t
c
h
)
.
"
,
 
e
x
:
 
"
P
g
B
o
u
n
c
e
r
 
p
o
o
l
 
p
e
r
 
s
e
r
v
i
c
e
,
 
s
e
p
a
r
a
t
e
 
r
e
a
d
 
r
e
p
l
i
c
a
s
.
"
 
}
,


 
 
{
 
k
:
 
"
K
u
b
e
r
n
e
t
e
s
 
r
e
s
o
u
r
c
e
s
"
,
 
v
:
 
"
N
a
m
e
s
p
a
c
e
s
 
a
n
d
 
R
e
s
o
u
r
c
e
Q
u
o
t
a
s
 
i
s
o
l
a
t
e
 
t
e
a
m
s
.
 
N
o
d
e
 
p
o
o
l
s
 
i
s
o
l
a
t
e
 
w
o
r
k
l
o
a
d
s
.
"
,
 
e
x
:
 
"
C
r
i
t
i
c
a
l
 
c
o
n
t
r
o
l
-
p
l
a
n
e
 
p
o
d
s
 
o
n
 
d
e
d
i
c
a
t
e
d
 
n
o
d
e
s
.
"
 
}
,


 
 
{
 
k
:
 
"
P
r
o
c
e
s
s
 
/
 
r
u
n
t
i
m
e
"
,
 
v
:
 
"
R
u
n
 
r
i
s
k
y
 
w
o
r
k
l
o
a
d
s
 
i
n
 
s
e
p
a
r
a
t
e
 
p
r
o
c
e
s
s
e
s
 
o
r
 
c
o
n
t
a
i
n
e
r
s
 
s
o
 
a
 
c
r
a
s
h
 
d
o
e
s
n
'
t
 
t
a
k
e
 
d
o
w
n
 
t
h
e
 
h
o
s
t
.
"
,
 
e
x
:
 
"
B
r
o
w
s
e
r
 
t
a
b
 
s
a
n
d
b
o
x
i
n
g
,
 
L
a
m
b
d
a
 
f
u
n
c
t
i
o
n
s
 
p
e
r
 
c
o
n
c
e
r
n
.
"
 
}
,


 
 
{
 
k
:
 
"
N
e
t
w
o
r
k
 
/
 
q
u
e
u
e
s
"
,
 
v
:
 
"
S
e
p
a
r
a
t
e
 
q
u
e
u
e
s
 
p
e
r
 
p
r
i
o
r
i
t
y
 
s
o
 
a
 
f
l
o
o
d
 
o
f
 
l
o
w
-
p
r
i
o
r
i
t
y
 
w
o
r
k
 
d
o
e
s
n
'
t
 
b
l
o
c
k
 
u
r
g
e
n
t
 
t
r
a
f
f
i
c
.
"
,
 
e
x
:
 
"
K
a
f
k
a
 
t
o
p
i
c
s
 
p
e
r
 
p
r
i
o
r
i
t
y
 
c
l
a
s
s
.
"
 
}
,


 
 
{
 
k
:
 
"
T
e
n
a
n
t
s
 
/
 
c
u
s
t
o
m
e
r
s
"
,
 
v
:
 
"
M
u
l
t
i
-
t
e
n
a
n
t
 
s
y
s
t
e
m
s
 
i
s
o
l
a
t
e
 
o
n
e
 
c
u
s
t
o
m
e
r
'
s
 
l
o
a
d
 
f
r
o
m
 
a
n
o
t
h
e
r
'
s
.
"
,
 
e
x
:
 
"
P
e
r
-
t
e
n
a
n
t
 
r
a
t
e
 
l
i
m
i
t
s
,
 
p
e
r
-
t
e
n
a
n
t
 
D
B
s
 
i
n
 
e
x
t
r
e
m
e
 
c
a
s
e
s
.
"
 
}
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
 
W
h
e
r
e
B
u
l
k
h
e
a
d
s
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
B
u
l
k
h
e
a
d
s
 
a
r
e
n
&
r
s
q
u
o
;
t
 
j
u
s
t
 
t
h
r
e
a
d
 
p
o
o
l
s
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
T
h
e
 
p
a
t
t
e
r
n
 
g
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
 
a
n
y
w
h
e
r
e
 
a
 
s
i
n
g
l
e
 
s
h
a
r
e
d
 
r
e
s
o
u
r
c
e
 
c
o
u
l
d
 
b
e
 
e
x
h
a
u
s
t
e
d
 
b
y
 
o
n
e


 
 
 
 
 
 
 
 
m
i
s
b
e
h
a
v
i
n
g
 
c
a
l
l
e
r
.
 
S
i
x
 
p
l
a
c
e
s
 
t
o
 
a
p
p
l
y
 
i
t
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
h
i
d
d
e
n
:
 
{
}
,
 
v
i
s
i
b
l
e
:
 
{
 
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
 
{
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
0
6
 
}
 
}
 
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
 
m
d
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
P
L
A
C
E
S
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
 
(


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
p
.
k
}


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
h
i
d
d
e
n
:
 
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
8
 
}
,
 
v
i
s
i
b
l
e
:
 
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
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
 
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
 
}
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
{
 
y
:
 
-
2
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
4
0
0
,
 
d
a
m
p
i
n
g
:
 
2
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
 
}
}


 
 
 
 
 
 
 
 
 
 
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
:
 
7
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
r
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>
{
p
.
k
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
 
"
0
.
8
4
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
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
.
5
5
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
8
 
}
}
>
{
p
.
v
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
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
4
r
e
m
"
,
 
c
o
l
o
r
:
 
S
D
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
W
e
i
g
h
t
:
 
8
0
0
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
m
a
r
g
i
n
R
i
g
h
t
:
 
4
 
}
}
>
E
X
 
·
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
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>
{
p
.
e
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
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
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
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
A
c
t
i
v
i
t
y
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




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
 
S
D
_
L
6
_
B
u
l
k
h
e
a
d
A
c
t
i
v
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
 
}
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
 
E
n
g
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
d
e
f
"
,
 
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
i
n
i
t
i
o
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
D
e
f
i
n
i
t
i
o
n
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
d
e
m
o
"
,
 
l
a
b
e
l
:
 
"
S
l
o
w
 
D
o
w
n
 
B
i
l
l
i
n
g
"
,
 
i
c
o
n
:
 
<
L
a
y
o
u
t
G
r
i
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
B
u
l
k
h
e
a
d
D
e
m
o
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
p
l
a
c
e
s
"
,
 
l
a
b
e
l
:
 
"
B
e
y
o
n
d
 
T
h
r
e
a
d
s
"
,
 
i
c
o
n
:
 
<
G
l
o
b
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
W
h
e
r
e
B
u
l
k
h
e
a
d
s
 
/
>
 
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
 
E
n
g
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
S
e
r
v
i
c
e
 
A
 
c
a
l
l
s
 
b
i
l
l
i
n
g
,
 
s
e
a
r
c
h
,
 
a
n
d
 
r
e
c
s
 
f
r
o
m
 
a
 
s
i
n
g
l
e
 
s
h
a
r
e
d
 
5
0
-
t
h
r
e
a
d
 
p
o
o
l
.
 
B
i
l
l
i
n
g
 
s
l
o
w
s
 
f
r
o
m
 
1
0
0
m
s
 
t
o
 
5
s
.
 
W
h
a
t
 
h
a
p
p
e
n
s
 
t
o
 
s
e
a
r
c
h
 
t
h
r
o
u
g
h
p
u
t
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
U
n
a
f
f
e
c
t
e
d
.
"
,


 
 
 
 
 
 
 
 
"
D
r
o
p
s
 
t
o
 
n
e
a
r
 
z
e
r
o
 
—
 
s
l
o
w
 
b
i
l
l
i
n
g
 
r
e
q
u
e
s
t
s
 
f
i
l
l
 
t
h
e
 
p
o
o
l
 
a
n
d
 
s
e
a
r
c
h
 
h
a
s
 
n
o
 
t
h
r
e
a
d
s
.
"
,


 
 
 
 
 
 
 
 
"
D
o
u
b
l
e
s
.
"
,


 
 
 
 
 
 
 
 
"
C
a
c
h
e
d
 
a
u
t
o
m
a
t
i
c
a
l
l
y
.
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
P
o
o
l
 
e
x
h
a
u
s
t
i
o
n
.
 
S
l
o
w
 
b
i
l
l
i
n
g
 
r
e
q
u
e
s
t
s
 
h
o
l
d
 
t
h
r
e
a
d
s
 
f
o
r
 
5
s
 
e
a
c
h
.
 
T
h
e
 
p
o
o
l
 
f
i
l
l
s
.
 
S
e
a
r
c
h
 
a
n
d
 
r
e
c
s
 
r
e
q
u
e
s
t
s
 
c
a
n
'
t
 
g
e
t
 
a
 
t
h
r
e
a
d
 
a
n
d
 
t
i
m
e
 
o
u
t
,
 
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
i
r
 
d
o
w
n
s
t
r
e
a
m
s
 
a
r
e
 
h
e
a
l
t
h
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
W
h
a
t
'
s
 
t
h
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
 
o
f
 
u
s
i
n
g
 
b
u
l
k
h
e
a
d
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
M
o
r
e
 
m
e
m
o
r
y
 
a
n
d
 
p
o
s
s
i
b
l
y
 
u
n
d
e
r
u
t
i
l
i
z
e
d
 
c
a
p
a
c
i
t
y
 
p
e
r
 
p
o
o
l
 
—
 
y
o
u
 
c
a
n
'
t
 
p
o
o
l
 
r
e
s
o
u
r
c
e
s
 
g
l
o
b
a
l
l
y
.
"
,


 
 
 
 
 
 
 
 
"
S
l
o
w
e
r
 
l
a
t
e
n
c
y
.
"
,


 
 
 
 
 
 
 
 
"
L
e
s
s
 
r
e
l
i
a
b
i
l
i
t
y
.
"
,


 
 
 
 
 
 
 
 
"
M
o
r
e
 
b
u
g
s
.
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
P
e
r
-
d
o
w
n
s
t
r
e
a
m
 
p
o
o
l
s
 
m
e
a
n
s
 
e
a
c
h
 
p
o
o
l
 
s
i
z
e
d
 
f
o
r
 
i
t
s
 
o
w
n
 
p
e
a
k
.
 
I
d
l
e
 
p
o
o
l
s
 
a
r
e
n
'
t
 
l
e
n
t
 
t
o
 
b
u
s
y
 
o
n
e
s
.
 
T
h
e
 
w
i
n
 
—
 
f
a
i
l
u
r
e
 
c
o
n
t
a
i
n
m
e
n
t
 
—
 
i
s
 
u
s
u
a
l
l
y
 
w
o
r
t
h
 
i
t
 
f
o
r
 
p
r
o
d
u
c
t
i
o
n
-
c
r
i
t
i
c
a
l
 
p
a
t
h
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
H
y
s
t
r
i
x
 
p
o
p
u
l
a
r
i
z
e
d
 
'
t
h
r
e
a
d
-
p
o
o
l
 
b
u
l
k
h
e
a
d
s
'
 
b
u
t
 
n
e
w
e
r
 
l
i
b
r
a
r
i
e
s
 
a
l
s
o
 
o
f
f
e
r
 
'
s
e
m
a
p
h
o
r
e
 
b
u
l
k
h
e
a
d
s
'
.
 
W
h
a
t
'
s
 
t
h
e
 
k
e
y
 
d
i
f
f
e
r
e
n
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
S
e
m
a
p
h
o
r
e
s
 
a
r
e
 
s
l
o
w
e
r
.
"
,


 
 
 
 
 
 
 
 
"
T
h
r
e
a
d
-
p
o
o
l
 
b
u
l
k
h
e
a
d
s
 
r
u
n
 
c
a
l
l
s
 
o
n
 
d
e
d
i
c
a
t
e
d
 
t
h
r
e
a
d
s
 
(
s
o
 
t
i
m
e
o
u
t
s
 
c
a
n
 
i
n
t
e
r
r
u
p
t
)
.
 
S
e
m
a
p
h
o
r
e
 
b
u
l
k
h
e
a
d
s
 
j
u
s
t
 
c
o
u
n
t
 
c
o
n
c
u
r
r
e
n
t
 
c
a
l
l
s
 
w
i
t
h
o
u
t
 
c
h
a
n
g
i
n
g
 
t
h
r
e
a
d
s
 
—
 
m
u
c
h
 
c
h
e
a
p
e
r
,
 
b
u
t
 
n
o
 
i
s
o
l
a
t
i
o
n
 
f
r
o
m
 
c
a
l
l
e
r
'
s
 
s
t
a
c
k
.
"
,


 
 
 
 
 
 
 
 
"
S
e
m
a
p
h
o
r
e
s
 
n
e
e
d
 
m
o
r
e
 
m
e
m
o
r
y
.
"
,


 
 
 
 
 
 
 
 
"
N
o
 
d
i
f
f
e
r
e
n
c
e
.
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
T
h
r
e
a
d
-
p
o
o
l
 
i
s
o
l
a
t
i
o
n
 
i
s
 
h
e
a
v
i
e
r
 
(
t
h
r
e
a
d
 
s
w
i
t
c
h
e
s
,
 
s
e
p
a
r
a
t
e
 
s
t
a
c
k
s
)
 
b
u
t
 
l
e
t
s
 
y
o
u
 
c
a
n
c
e
l
 
v
i
a
 
i
n
t
e
r
r
u
p
t
.
 
S
e
m
a
p
h
o
r
e
 
i
s
o
l
a
t
i
o
n
 
i
s
 
j
u
s
t
 
a
 
c
o
u
n
t
e
r
 
—
 
f
a
s
t
,
 
b
u
t
 
t
h
e
 
c
a
l
l
 
s
t
i
l
l
 
r
u
n
s
 
o
n
 
t
h
e
 
c
a
l
l
e
r
'
s
 
t
h
r
e
a
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
Y
o
u
 
r
u
n
 
5
0
 
m
i
c
r
o
s
e
r
v
i
c
e
s
 
i
n
 
o
n
e
 
K
u
b
e
r
n
e
t
e
s
 
n
a
m
e
s
p
a
c
e
,
 
n
o
 
r
e
s
o
u
r
c
e
 
q
u
o
t
a
s
.
 
O
n
e
 
m
e
m
o
r
y
 
l
e
a
k
 
a
p
p
e
a
r
s
.
 
W
h
a
t
'
s
 
t
h
e
 
b
u
l
k
h
e
a
d
 
f
a
i
l
u
r
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
N
o
t
h
i
n
g
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
l
e
a
k
y
 
s
e
r
v
i
c
e
 
e
x
h
a
u
s
t
s
 
n
o
d
e
 
m
e
m
o
r
y
;
 
c
o
-
l
o
c
a
t
e
d
 
s
e
r
v
i
c
e
s
 
g
e
t
 
O
O
M
-
k
i
l
l
e
d
 
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
'
r
e
 
h
e
a
l
t
h
y
.
"
,


 
 
 
 
 
 
 
 
"
L
a
t
e
n
c
y
 
i
n
c
r
e
a
s
e
s
 
g
l
o
b
a
l
l
y
.
"
,


 
 
 
 
 
 
 
 
"
L
o
g
s
 
f
a
i
l
.
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
N
o
 
r
e
s
o
u
r
c
e
 
i
s
o
l
a
t
i
o
n
 
=
 
n
e
i
g
h
b
o
r
s
 
s
h
a
r
e
 
f
a
t
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
 
l
a
y
o
u
t
s
 
u
s
e
 
R
e
s
o
u
r
c
e
L
i
m
i
t
s
 
p
e
r
 
p
o
d
,
 
s
o
m
e
t
i
m
e
s
 
d
e
d
i
c
a
t
e
d
 
n
o
d
e
 
p
o
o
l
s
 
f
o
r
 
c
r
i
t
i
c
a
l
 
s
e
r
v
i
c
e
s
,
 
s
o
 
o
n
e
 
b
a
d
 
n
e
i
g
h
b
o
r
 
c
a
n
'
t
 
b
r
e
a
k
 
t
h
e
 
r
e
s
t
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
E
n
g
i
n
e
e
r
i
n
g
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
B
u
l
k
h
e
a
d
s
 
&
 
I
s
o
l
a
t
i
o
n
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
T
h
e
 
'
h
o
w
 
d
o
 
y
o
u
 
s
t
o
p
 
a
 
d
o
w
n
s
t
r
e
a
m
 
f
r
o
m
 
k
i
l
l
i
n
g
 
y
o
u
r
 
s
e
r
v
i
c
e
'
 
a
n
s
w
e
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


