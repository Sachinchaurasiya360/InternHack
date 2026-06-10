
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
 
C
r
o
w
n
,
 
D
a
t
a
b
a
s
e
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
,
 
V
o
t
e
 
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
n
s
e
n
s
u
s
:
 
g
e
t
t
i
n
g
 
a
 
g
r
o
u
p
 
t
o
 
a
g
r
e
e
 
o
n
 
o
n
e
 
v
a
l
u
e
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


 
 
 
 
 
 
 
 
C
o
n
s
e
n
s
u
s
 
i
s
 
t
h
e
 
p
r
o
b
l
e
m
 
o
f
 
g
e
t
t
i
n
g
 
<
b
>
N
 
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
t
 
n
o
d
e
s
<
/
b
>
 
t
o
 
a
g
r
e
e
 
o
n
 
a
 
s
i
n
g
l
e


 
 
 
 
 
 
 
 
d
e
c
i
s
i
o
n
 
(
t
h
e
 
n
e
x
t
 
e
n
t
r
y
 
i
n
 
a
 
l
o
g
,
 
t
h
e
 
n
e
w
 
l
e
a
d
e
r
,
 
t
h
e
 
v
a
l
u
e
 
o
f
 
a
 
c
o
n
f
i
g
)
.
 
I
t
 
m
u
s
t


 
 
 
 
 
 
 
 
s
u
r
v
i
v
e
 
n
o
d
e
 
c
r
a
s
h
e
s
,
 
n
e
t
w
o
r
k
 
d
e
l
a
y
s
,
 
a
n
d
 
m
e
s
s
a
g
e
 
r
e
o
r
d
e
r
i
n
g
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
8
 
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
3
 
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
 
k
:
 
"
S
a
f
e
t
y
"
,
 
v
:
 
"
T
w
o
 
n
o
d
e
s
 
n
e
v
e
r
 
d
e
c
i
d
e
 
o
n
 
d
i
f
f
e
r
e
n
t
 
v
a
l
u
e
s
 
f
o
r
 
t
h
e
 
s
a
m
e
 
s
l
o
t
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
L
i
v
e
n
e
s
s
"
,
 
v
:
 
"
E
v
e
n
t
u
a
l
l
y
 
a
 
v
a
l
u
e
 
i
s
 
d
e
c
i
d
e
d
,
 
g
i
v
e
n
 
a
 
s
t
a
b
l
e
 
e
n
o
u
g
h
 
n
e
t
w
o
r
k
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
F
a
u
l
t
 
t
o
l
e
r
a
n
c
e
"
,
 
v
:
 
"
T
o
l
e
r
a
t
e
s
 
u
p
 
t
o
 
⌊
(
N
-
1
)
/
2
⌋
 
n
o
d
e
 
f
a
i
l
u
r
e
s
 
(
e
.
g
.
 
5
 
n
o
d
e
s
 
s
u
r
v
i
v
e
s
 
2
 
d
o
w
n
)
.
"
 
}
,


 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
c
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
c
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
 
1
0
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
.
k
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
5
5
 
}
}
>
{
c
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
,


 
 
 
 
 
 
 
 
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
8
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
e
t
c
d
<
/
b
>
 
(
u
s
e
d
 
b
y
 
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
 
f
o
r
 
c
l
u
s
t
e
r
 
s
t
a
t
e
)
 
a
n
d
 
<
b
>
C
o
n
s
u
l
<
/
b
>
 
u
s
e
 
R
a
f
t
.
 
<
b
>
Z
o
o
K
e
e
p
e
r
<
/
b
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
u
s
e
s
 
Z
A
B
 
(
a
 
P
a
x
o
s
 
c
o
u
s
i
n
)
.
 
<
b
>
C
o
c
k
r
o
a
c
h
D
B
<
/
b
>
 
s
h
a
r
d
s
 
y
o
u
r
 
D
B
 
a
n
d
 
r
u
n
s
 
R
a
f
t
 
p
e
r
 
s
h
a
r
d
.


 
 
 
 
 
 
 
 
 
 
W
h
e
n
e
v
e
r
 
a
 
s
y
s
t
e
m
 
s
a
y
s
 
&
l
d
q
u
o
;
s
u
r
v
i
v
e
s
 
N
/
2
 
f
a
i
l
u
r
e
s
,
&
r
d
q
u
o
;
 
t
h
a
t
&
r
s
q
u
o
;
s
 
c
o
n
s
e
n
s
u
s
 
u
n
d
e
r
 
t
h
e
 
h
o
o
d
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
 
E
l
e
c
t
i
o
n
 
a
n
i
m
a
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




t
y
p
e
 
N
o
d
e
S
t
a
t
e
 
=
 
"
f
o
l
l
o
w
e
r
"
 
|
 
"
c
a
n
d
i
d
a
t
e
"
 
|
 
"
l
e
a
d
e
r
"
 
|
 
"
d
o
w
n
"
;


t
y
p
e
 
P
h
a
s
e
 
=
 
"
s
t
a
b
l
e
"
 
|
 
"
l
e
a
d
e
r
-
d
o
w
n
"
 
|
 
"
e
l
e
c
t
i
o
n
"
 
|
 
"
e
l
e
c
t
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
 
R
a
f
t
N
o
d
e
 
{


 
 
i
d
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
:
 
N
o
d
e
S
t
a
t
e
;


 
 
t
e
r
m
:
 
n
u
m
b
e
r
;


 
 
v
o
t
e
d
F
o
r
:
 
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
;


}




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
P
O
S
I
T
I
O
N
S
 
=
 
[


 
 
{
 
x
:
 
3
6
0
,
 
y
:
 
5
0
 
}
,


 
 
{
 
x
:
 
5
8
0
,
 
y
:
 
1
3
0
 
}
,


 
 
{
 
x
:
 
5
1
0
,
 
y
:
 
2
9
0
 
}
,


 
 
{
 
x
:
 
2
1
0
,
 
y
:
 
2
9
0
 
}
,


 
 
{
 
x
:
 
1
4
0
,
 
y
:
 
1
3
0
 
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
 
E
l
e
c
t
i
o
n
A
n
i
m
a
t
i
o
n
(
)
 
{


 
 
c
o
n
s
t
 
[
n
o
d
e
s
,
 
s
e
t
N
o
d
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
R
a
f
t
N
o
d
e
[
]
>
(
[


 
 
 
 
{
 
i
d
:
 
0
,
 
s
t
a
t
e
:
 
"
l
e
a
d
e
r
"
,
 
t
e
r
m
:
 
1
,
 
v
o
t
e
d
F
o
r
:
 
0
 
}
,


 
 
 
 
{
 
i
d
:
 
1
,
 
s
t
a
t
e
:
 
"
f
o
l
l
o
w
e
r
"
,
 
t
e
r
m
:
 
1
,
 
v
o
t
e
d
F
o
r
:
 
0
 
}
,


 
 
 
 
{
 
i
d
:
 
2
,
 
s
t
a
t
e
:
 
"
f
o
l
l
o
w
e
r
"
,
 
t
e
r
m
:
 
1
,
 
v
o
t
e
d
F
o
r
:
 
0
 
}
,


 
 
 
 
{
 
i
d
:
 
3
,
 
s
t
a
t
e
:
 
"
f
o
l
l
o
w
e
r
"
,
 
t
e
r
m
:
 
1
,
 
v
o
t
e
d
F
o
r
:
 
0
 
}
,


 
 
 
 
{
 
i
d
:
 
4
,
 
s
t
a
t
e
:
 
"
f
o
l
l
o
w
e
r
"
,
 
t
e
r
m
:
 
1
,
 
v
o
t
e
d
F
o
r
:
 
0
 
}
,


 
 
]
)
;


 
 
c
o
n
s
t
 
[
p
h
a
s
e
,
 
s
e
t
P
h
a
s
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
P
h
a
s
e
>
(
"
s
t
a
b
l
e
"
)
;




 
 
c
o
n
s
t
 
k
i
l
l
L
e
a
d
e
r
 
=
 
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
p
h
a
s
e
 
!
=
=
 
"
s
t
a
b
l
e
"
)
 
r
e
t
u
r
n
;


 
 
 
 
s
e
t
N
o
d
e
s
(
(
n
s
)
 
=
>
 
n
s
.
m
a
p
(
(
n
)
 
=
>
 
(
n
.
s
t
a
t
e
 
=
=
=
 
"
l
e
a
d
e
r
"
 
?
 
{
 
.
.
.
n
,
 
s
t
a
t
e
:
 
"
d
o
w
n
"
 
}
 
:
 
n
)
)
)
;


 
 
 
 
s
e
t
P
h
a
s
e
(
"
l
e
a
d
e
r
-
d
o
w
n
"
)
;


 
 
}
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
N
o
d
e
s
(
[


 
 
 
 
 
 
{
 
i
d
:
 
0
,
 
s
t
a
t
e
:
 
"
l
e
a
d
e
r
"
,
 
t
e
r
m
:
 
1
,
 
v
o
t
e
d
F
o
r
:
 
0
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
1
,
 
s
t
a
t
e
:
 
"
f
o
l
l
o
w
e
r
"
,
 
t
e
r
m
:
 
1
,
 
v
o
t
e
d
F
o
r
:
 
0
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
2
,
 
s
t
a
t
e
:
 
"
f
o
l
l
o
w
e
r
"
,
 
t
e
r
m
:
 
1
,
 
v
o
t
e
d
F
o
r
:
 
0
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
3
,
 
s
t
a
t
e
:
 
"
f
o
l
l
o
w
e
r
"
,
 
t
e
r
m
:
 
1
,
 
v
o
t
e
d
F
o
r
:
 
0
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
4
,
 
s
t
a
t
e
:
 
"
f
o
l
l
o
w
e
r
"
,
 
t
e
r
m
:
 
1
,
 
v
o
t
e
d
F
o
r
:
 
0
 
}
,


 
 
 
 
]
)
;


 
 
 
 
s
e
t
P
h
a
s
e
(
"
s
t
a
b
l
e
"
)
;


 
 
}
;




 
 
/
/
 
D
r
i
v
e
 
t
h
e
 
e
l
e
c
t
i
o
n
 
s
e
q
u
e
n
c
e


 
 
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
p
h
a
s
e
 
=
=
=
 
"
l
e
a
d
e
r
-
d
o
w
n
"
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
t
 
=
 
s
e
t
T
i
m
e
o
u
t
(
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
/
/
 
p
i
c
k
 
t
h
e
 
n
e
x
t
 
n
o
n
-
d
o
w
n
 
n
o
d
e
 
a
s
 
t
h
e
 
c
a
n
d
i
d
a
t
e


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
a
n
d
i
d
a
t
e
 
=
 
n
o
d
e
s
.
f
i
n
d
(
(
n
)
 
=
>
 
n
.
s
t
a
t
e
 
!
=
=
 
"
d
o
w
n
"
)
;


 
 
 
 
 
 
 
 
i
f
 
(
!
c
a
n
d
i
d
a
t
e
)
 
r
e
t
u
r
n
;


 
 
 
 
 
 
 
 
s
e
t
N
o
d
e
s
(
(
n
s
)
 
=
>


 
 
 
 
 
 
 
 
 
 
n
s
.
m
a
p
(
(
n
)
 
=
>


 
 
 
 
 
 
 
 
 
 
 
 
n
.
i
d
 
=
=
=
 
c
a
n
d
i
d
a
t
e
.
i
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
{
 
.
.
.
n
,
 
s
t
a
t
e
:
 
"
c
a
n
d
i
d
a
t
e
"
 
a
s
 
N
o
d
e
S
t
a
t
e
,
 
t
e
r
m
:
 
n
.
t
e
r
m
 
+
 
1
,
 
v
o
t
e
d
F
o
r
:
 
n
.
i
d
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
n
.
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
w
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
{
 
.
.
.
n
,
 
s
t
a
t
e
:
 
"
f
o
l
l
o
w
e
r
"
 
a
s
 
N
o
d
e
S
t
a
t
e
,
 
v
o
t
e
d
F
o
r
:
 
n
u
l
l
 
}
,


 
 
 
 
 
 
 
 
 
 
)
,


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
s
e
t
P
h
a
s
e
(
"
e
l
e
c
t
i
o
n
"
)
;


 
 
 
 
 
 
}
,
 
1
4
0
0
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
T
i
m
e
o
u
t
(
t
)
;


 
 
 
 
}


 
 
 
 
i
f
 
(
p
h
a
s
e
 
=
=
=
 
"
e
l
e
c
t
i
o
n
"
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
t
 
=
 
s
e
t
T
i
m
e
o
u
t
(
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
/
/
 
c
a
n
d
i
d
a
t
e
 
g
a
t
h
e
r
s
 
v
o
t
e
s
 
f
r
o
m
 
l
i
v
e
 
f
o
l
l
o
w
e
r
s


 
 
 
 
 
 
 
 
s
e
t
N
o
d
e
s
(
(
n
s
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
a
n
d
i
d
a
t
e
 
=
 
n
s
.
f
i
n
d
(
(
n
)
 
=
>
 
n
.
s
t
a
t
e
 
=
=
=
 
"
c
a
n
d
i
d
a
t
e
"
)
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
c
a
n
d
i
d
a
t
e
)
 
r
e
t
u
r
n
 
n
s
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
n
s
.
m
a
p
(
(
n
)
 
=
>


 
 
 
 
 
 
 
 
 
 
 
 
n
.
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
w
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
n
.
s
t
a
t
e
 
=
=
=
 
"
c
a
n
d
i
d
a
t
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
{
 
.
.
.
n
,
 
s
t
a
t
e
:
 
"
l
e
a
d
e
r
"
 
a
s
 
N
o
d
e
S
t
a
t
e
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
{
 
.
.
.
n
,
 
s
t
a
t
e
:
 
"
f
o
l
l
o
w
e
r
"
 
a
s
 
N
o
d
e
S
t
a
t
e
,
 
t
e
r
m
:
 
c
a
n
d
i
d
a
t
e
.
t
e
r
m
,
 
v
o
t
e
d
F
o
r
:
 
c
a
n
d
i
d
a
t
e
.
i
d
 
}
,


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
s
e
t
P
h
a
s
e
(
"
e
l
e
c
t
e
d
"
)
;


 
 
 
 
 
 
}
,
 
1
8
0
0
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
T
i
m
e
o
u
t
(
t
)
;


 
 
 
 
}


 
 
 
 
i
f
 
(
p
h
a
s
e
 
=
=
=
 
"
e
l
e
c
t
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
 
t
 
=
 
s
e
t
T
i
m
e
o
u
t
(
(
)
 
=
>
 
s
e
t
P
h
a
s
e
(
"
s
t
a
b
l
e
"
)
,
 
1
2
0
0
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
T
i
m
e
o
u
t
(
t
)
;


 
 
 
 
}


 
 
}
,
 
[
p
h
a
s
e
,
 
n
o
d
e
s
]
)
;




 
 
c
o
n
s
t
 
c
a
n
d
i
d
a
t
e
 
=
 
n
o
d
e
s
.
f
i
n
d
(
(
n
)
 
=
>
 
n
.
s
t
a
t
e
 
=
=
=
 
"
c
a
n
d
i
d
a
t
e
"
)
;


 
 
c
o
n
s
t
 
c
u
r
r
e
n
t
L
e
a
d
e
r
 
=
 
n
o
d
e
s
.
f
i
n
d
(
(
n
)
 
=
>
 
n
.
s
t
a
t
e
 
=
=
=
 
"
l
e
a
d
e
r
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
F
i
v
e
 
n
o
d
e
s
.
 
O
n
e
 
l
e
a
d
e
r
.
 
K
i
l
l
 
t
h
e
 
l
e
a
d
e
r
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


 
 
 
 
 
 
 
 
R
a
f
t
 
k
e
e
p
s
 
o
n
e
 
e
l
e
c
t
e
d
 
l
e
a
d
e
r
 
a
t
 
a
 
t
i
m
e
.
 
F
o
l
l
o
w
e
r
s
 
w
a
i
t
 
f
o
r
 
t
h
e
 
l
e
a
d
e
r
&
r
s
q
u
o
;
s
 
h
e
a
r
t
b
e
a
t
.
 
I
f


 
 
 
 
 
 
 
 
t
h
e
 
h
e
a
r
t
b
e
a
t
 
s
t
o
p
s
,
 
a
 
f
o
l
l
o
w
e
r
 
b
e
c
o
m
e
s
 
a
 
<
b
>
c
a
n
d
i
d
a
t
e
<
/
b
>
,
 
i
n
c
r
e
m
e
n
t
s
 
t
h
e
 
t
e
r
m
,
 
a
n
d
 
a
s
k
s


 
 
 
 
 
 
 
 
o
t
h
e
r
s
 
f
o
r
 
v
o
t
e
s
.
 
W
h
o
e
v
e
r
 
g
e
t
s
 
a
 
m
a
j
o
r
i
t
y
 
w
i
n
s
 
t
h
e
 
n
e
w
 
t
e
r
m
.


 
 
 
 
 
 
<
/
p
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
 
4
2
0
,


 
 
 
 
 
 
 
 
 
 
p
o
s
i
t
i
o
n
:
 
"
r
e
l
a
t
i
v
e
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
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
"
0
 
0
 
7
2
0
 
3
6
0
"
 
w
i
d
t
h
=
"
1
0
0
%
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
a
x
W
i
d
t
h
:
 
7
6
0
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
b
l
o
c
k
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
 
a
u
t
o
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
h
e
a
r
t
b
e
a
t
s
 
f
r
o
m
 
l
e
a
d
e
r
 
t
o
 
f
o
l
l
o
w
e
r
s
 
w
h
e
n
 
s
t
a
b
l
e
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
p
h
a
s
e
 
=
=
=
 
"
s
t
a
b
l
e
"
 
&
&
 
c
u
r
r
e
n
t
L
e
a
d
e
r
 
&
&
 
n
o
d
e
s
.
m
a
p
(
(
n
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
n
.
s
t
a
t
e
 
!
=
=
 
"
f
o
l
l
o
w
e
r
"
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


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
l
p
 
=
 
N
O
D
E
_
P
O
S
I
T
I
O
N
S
[
c
u
r
r
e
n
t
L
e
a
d
e
r
.
i
d
]
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
p
 
=
 
N
O
D
E
_
P
O
S
I
T
I
O
N
S
[
n
.
i
d
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
m
o
t
i
o
n
.
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
h
b
-
$
{
n
.
i
d
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
l
p
.
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
1
=
{
l
p
.
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
n
p
.
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
2
=
{
n
p
.
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
S
D
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
O
p
a
c
i
t
y
=
{
0
.
3
5
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
"
2
 
4
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
h
e
a
r
t
b
e
a
t
 
p
a
c
k
e
t
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
p
h
a
s
e
 
=
=
=
 
"
s
t
a
b
l
e
"
 
&
&
 
c
u
r
r
e
n
t
L
e
a
d
e
r
 
&
&
 
n
o
d
e
s
.
f
i
l
t
e
r
(
(
n
)
 
=
>
 
n
.
s
t
a
t
e
 
=
=
=
 
"
f
o
l
l
o
w
e
r
"
)
.
m
a
p
(
(
n
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
l
p
 
=
 
N
O
D
E
_
P
O
S
I
T
I
O
N
S
[
c
u
r
r
e
n
t
L
e
a
d
e
r
.
i
d
]
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
p
 
=
 
N
O
D
E
_
P
O
S
I
T
I
O
N
S
[
n
.
i
d
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
m
o
t
i
o
n
.
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
`
h
b
p
-
$
{
n
.
i
d
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
3
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
S
D
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
 
c
x
:
 
[
l
p
.
x
,
 
n
p
.
x
]
,
 
c
y
:
 
[
l
p
.
y
,
 
n
p
.
y
]
 
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
 
1
.
8
,
 
r
e
p
e
a
t
:
 
I
n
f
i
n
i
t
y
,
 
e
a
s
e
:
 
"
l
i
n
e
a
r
"
,
 
d
e
l
a
y
:
 
n
.
i
d
 
*
 
0
.
2
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
v
o
t
e
 
r
e
q
u
e
s
t
s
 
d
u
r
i
n
g
 
e
l
e
c
t
i
o
n
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
p
h
a
s
e
 
=
=
=
 
"
e
l
e
c
t
i
o
n
"
 
&
&
 
c
a
n
d
i
d
a
t
e
 
&
&
 
n
o
d
e
s
.
f
i
l
t
e
r
(
(
n
)
 
=
>
 
n
.
s
t
a
t
e
 
!
=
=
 
"
d
o
w
n
"
 
&
&
 
n
.
s
t
a
t
e
 
!
=
=
 
"
c
a
n
d
i
d
a
t
e
"
)
.
m
a
p
(
(
n
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
p
 
=
 
N
O
D
E
_
P
O
S
I
T
I
O
N
S
[
c
a
n
d
i
d
a
t
e
.
i
d
]
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
p
 
=
 
N
O
D
E
_
P
O
S
I
T
I
O
N
S
[
n
.
i
d
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
g
 
k
e
y
=
{
`
v
r
-
$
{
n
.
i
d
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
c
p
.
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
1
=
{
c
p
.
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
n
p
.
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
2
=
{
n
p
.
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
W
A
R
N
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
5
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
 
p
a
t
h
L
e
n
g
t
h
:
 
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
 
p
a
t
h
L
e
n
g
t
h
:
 
1
 
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
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
W
A
R
N
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
 
c
x
:
 
c
p
.
x
,
 
c
y
:
 
c
p
.
y
 
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
 
c
x
:
 
n
p
.
x
,
 
c
y
:
 
n
p
.
y
 
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
6
,
 
d
e
l
a
y
:
 
0
.
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
n
o
d
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
n
o
d
e
s
.
m
a
p
(
(
n
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
 
=
 
N
O
D
E
_
P
O
S
I
T
I
O
N
S
[
n
.
i
d
]
;


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
<
R
a
f
t
N
o
d
e
B
o
x
 
k
e
y
=
{
n
.
i
d
}
 
x
=
{
p
.
x
}
 
y
=
{
p
.
y
}
 
n
o
d
e
=
{
n
}
 
/
>
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




 
 
 
 
 
 
 
 
{
/
*
 
s
t
a
t
u
s
 
s
t
r
i
p
 
*
/
}


 
 
 
 
 
 
 
 
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
p
h
a
s
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
 
1
2
,


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
H
A
S
E


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
p
h
a
s
e
 
=
=
=
 
"
s
t
a
b
l
e
"
 
&
&
 
`
L
e
a
d
e
r
 
N
$
{
c
u
r
r
e
n
t
L
e
a
d
e
r
?
.
i
d
}
 
s
e
n
d
s
 
h
e
a
r
t
b
e
a
t
s
 
e
v
e
r
y
 
~
1
5
0
m
s
.
 
T
e
r
m
 
$
{
c
u
r
r
e
n
t
L
e
a
d
e
r
?
.
t
e
r
m
}
.
`
}


 
 
 
 
 
 
 
 
 
 
 
 
{
p
h
a
s
e
 
=
=
=
 
"
l
e
a
d
e
r
-
d
o
w
n
"
 
&
&
 
"
L
e
a
d
e
r
 
i
s
 
u
n
r
e
a
c
h
a
b
l
e
.
 
F
o
l
l
o
w
e
r
s
 
w
a
i
t
 
f
o
r
 
a
n
 
e
l
e
c
t
i
o
n
 
t
i
m
e
o
u
t
 
(
r
a
n
d
o
m
i
z
e
d
 
1
5
0
-
3
0
0
m
s
)
.
"
}


 
 
 
 
 
 
 
 
 
 
 
 
{
p
h
a
s
e
 
=
=
=
 
"
e
l
e
c
t
i
o
n
"
 
&
&
 
`
C
a
n
d
i
d
a
t
e
 
N
$
{
c
a
n
d
i
d
a
t
e
?
.
i
d
}
 
r
e
q
u
e
s
t
s
 
v
o
t
e
s
 
f
o
r
 
t
e
r
m
 
$
{
c
a
n
d
i
d
a
t
e
?
.
t
e
r
m
}
.
 
E
a
c
h
 
l
i
v
e
 
n
o
d
e
 
v
o
t
e
s
 
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
 
p
e
r
 
t
e
r
m
.
`
}


 
 
 
 
 
 
 
 
 
 
 
 
{
p
h
a
s
e
 
=
=
=
 
"
e
l
e
c
t
e
d
"
 
&
&
 
`
N
$
{
c
u
r
r
e
n
t
L
e
a
d
e
r
?
.
i
d
}
 
w
i
n
s
 
m
a
j
o
r
i
t
y
.
 
N
e
w
 
l
e
a
d
e
r
 
f
o
r
 
t
e
r
m
 
$
{
c
u
r
r
e
n
t
L
e
a
d
e
r
?
.
t
e
r
m
}
.
`
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
k
i
l
l
L
e
a
d
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
p
h
a
s
e
 
!
=
=
 
"
s
t
a
b
l
e
"
}


 
 
 
 
 
 
 
 
 
 
 
 
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
 
p
h
a
s
e
 
=
=
=
 
"
s
t
a
b
l
e
"
 
?
 
"
p
o
i
n
t
e
r
"
 
:
 
"
n
o
t
-
a
l
l
o
w
e
d
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
h
a
s
e
 
=
=
=
 
"
s
t
a
b
l
e
"
 
?
 
W
A
R
N
 
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
5
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
 
p
h
a
s
e
 
=
=
=
 
"
s
t
a
b
l
e
"
 
?
 
`
$
{
W
A
R
N
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
 
p
h
a
s
e
 
=
=
=
 
"
s
t
a
b
l
e
"
 
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


 
 
 
 
 
 
 
 
 
 
 
 
k
i
l
l
 
l
e
a
d
e
r


 
 
 
 
 
 
 
 
 
 
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
 
"
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
5
)
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
 
R
a
f
t
N
o
d
e
B
o
x
(
{
 
x
,
 
y
,
 
n
o
d
e
 
}
:
 
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
;
 
n
o
d
e
:
 
R
a
f
t
N
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
 
c
o
l
o
r
 
=


 
 
 
 
n
o
d
e
.
s
t
a
t
e
 
=
=
=
 
"
l
e
a
d
e
r
"


 
 
 
 
 
 
?
 
S
D


 
 
 
 
 
 
:
 
n
o
d
e
.
s
t
a
t
e
 
=
=
=
 
"
c
a
n
d
i
d
a
t
e
"


 
 
 
 
 
 
 
 
?
 
W
A
R
N


 
 
 
 
 
 
 
 
:
 
n
o
d
e
.
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
w
n
"


 
 
 
 
 
 
 
 
 
 
?
 
"
#
4
7
5
5
6
9
"


 
 
 
 
 
 
 
 
 
 
:
 
N
E
U
T
R
A
L
;


 
 
c
o
n
s
t
 
I
c
o
n
 
=


 
 
 
 
n
o
d
e
.
s
t
a
t
e
 
=
=
=
 
"
l
e
a
d
e
r
"
 
?
 
C
r
o
w
n
 
:
 
n
o
d
e
.
s
t
a
t
e
 
=
=
=
 
"
c
a
n
d
i
d
a
t
e
"
 
?
 
V
o
t
e
 
:
 
n
o
d
e
.
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
w
n
"
 
?
 
S
k
u
l
l
 
:
 
D
a
t
a
b
a
s
e
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
 
t
r
a
n
s
f
o
r
m
=
{
`
t
r
a
n
s
l
a
t
e
(
$
{
x
}
,
 
$
{
y
}
)
`
}
>


 
 
 
 
 
 
{
n
o
d
e
.
s
t
a
t
e
 
=
=
=
 
"
l
e
a
d
e
r
"
 
&
&
 
(


 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
r
=
{
3
6
}


 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
c
o
l
o
r
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
.
3
,
 
s
c
a
l
e
:
 
1
 
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
 
0
,
 
s
c
a
l
e
:
 
1
.
4
 
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
 
1
.
4
,
 
r
e
p
e
a
t
:
 
I
n
f
i
n
i
t
y
,
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
"
 
}
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
m
o
t
i
o
n
.
c
i
r
c
l
e


 
 
 
 
 
 
 
 
r
=
{
2
8
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
 
f
i
l
l
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
2
2
`
,
 
s
t
r
o
k
e
:
 
c
o
l
o
r
 
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
5
}


 
 
 
 
 
 
/
>


 
 
 
 
 
 
<
f
o
r
e
i
g
n
O
b
j
e
c
t
 
x
=
{
-
1
2
}
 
y
=
{
-
2
2
}
 
w
i
d
t
h
=
{
2
4
}
 
h
e
i
g
h
t
=
{
2
4
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
 
w
i
d
t
h
:
 
2
4
,
 
h
e
i
g
h
t
:
 
2
4
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
I
c
o
n
 
w
i
d
t
h
=
{
1
6
}
 
h
e
i
g
h
t
=
{
1
6
}
 
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
 
}
}
 
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
f
o
r
e
i
g
n
O
b
j
e
c
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
0
}
 
y
=
{
1
0
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
i
l
l
=
{
c
o
l
o
r
}
 
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
M
O
N
O
}
>


 
 
 
 
 
 
 
 
N
{
n
o
d
e
.
i
d
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
0
}
 
y
=
{
2
2
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
i
l
l
=
{
N
E
U
T
R
A
L
}
 
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
M
O
N
O
}
>


 
 
 
 
 
 
 
 
t
{
n
o
d
e
.
t
e
r
m
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
 
L
o
g
 
r
e
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
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
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




i
n
t
e
r
f
a
c
e
 
L
o
g
E
n
t
r
y
 
{


 
 
t
e
r
m
:
 
n
u
m
b
e
r
;


 
 
c
m
d
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
 
S
A
M
P
L
E
_
L
O
G
:
 
L
o
g
E
n
t
r
y
[
]
 
=
 
[


 
 
{
 
t
e
r
m
:
 
1
,
 
c
m
d
:
 
"
x
 
=
 
1
"
 
}
,


 
 
{
 
t
e
r
m
:
 
1
,
 
c
m
d
:
 
"
y
 
=
 
2
"
 
}
,


 
 
{
 
t
e
r
m
:
 
2
,
 
c
m
d
:
 
"
x
 
=
 
3
"
 
}
,


 
 
{
 
t
e
r
m
:
 
2
,
 
c
m
d
:
 
"
z
 
=
 
9
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
 
L
o
g
R
e
p
l
i
c
a
t
i
o
n
(
)
 
{


 
 
c
o
n
s
t
 
[
c
o
m
m
i
t
t
e
d
,
 
s
e
t
C
o
m
m
i
t
t
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
(
0
)
;


 
 
c
o
n
s
t
 
[
p
l
a
y
i
n
g
,
 
s
e
t
P
l
a
y
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
f
a
l
s
e
)
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
p
l
a
y
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


 
 
 
 
i
f
 
(
c
o
m
m
i
t
t
e
d
 
>
=
 
S
A
M
P
L
E
_
L
O
G
.
l
e
n
g
t
h
)
 
{


 
 
 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
s
e
t
-
s
t
a
t
e
-
i
n
-
e
f
f
e
c
t


 
 
 
 
 
 
s
e
t
P
l
a
y
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}


 
 
 
 
c
o
n
s
t
 
t
 
=
 
s
e
t
T
i
m
e
o
u
t
(
(
)
 
=
>
 
s
e
t
C
o
m
m
i
t
t
e
d
(
(
c
)
 
=
>
 
M
a
t
h
.
m
i
n
(
S
A
M
P
L
E
_
L
O
G
.
l
e
n
g
t
h
,
 
c
 
+
 
1
)
)
,
 
1
2
0
0
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
T
i
m
e
o
u
t
(
t
)
;


 
 
}
,
 
[
p
l
a
y
i
n
g
,
 
c
o
m
m
i
t
t
e
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
T
h
e
 
l
e
a
d
e
r
 
a
p
p
e
n
d
s
.
 
F
o
l
l
o
w
e
r
s
 
c
a
t
c
h
 
u
p
.
 
Q
u
o
r
u
m
 
c
o
m
m
i
t
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


 
 
 
 
 
 
 
 
O
n
c
e
 
a
 
l
e
a
d
e
r
 
i
s
 
e
l
e
c
t
e
d
,
 
e
v
e
r
y
 
c
l
i
e
n
t
 
w
r
i
t
e
 
g
o
e
s
 
t
o
 
t
h
e
 
l
e
a
d
e
r
,
 
g
e
t
s
 
a
p
p
e
n
d
e
d
 
t
o
 
i
t
s
 
l
o
g
,


 
 
 
 
 
 
 
 
a
n
d
 
i
s
 
r
e
p
l
i
c
a
t
e
d
 
t
o
 
f
o
l
l
o
w
e
r
s
.
 
A
n
 
e
n
t
r
y
 
i
s
 
<
b
>
c
o
m
m
i
t
t
e
d
<
/
b
>
 
o
n
l
y
 
a
f
t
e
r
 
a
 
m
a
j
o
r
i
t
y
 
o
f


 
 
 
 
 
 
 
 
n
o
d
e
s
 
(
i
n
c
l
.
 
t
h
e
 
l
e
a
d
e
r
)
 
h
a
v
e
 
i
t
.
 
T
h
e
n
 
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
 
s
a
f
e
 
t
o
 
a
p
p
l
y
 
t
o
 
t
h
e
 
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
.


 
 
 
 
 
 
<
/
p
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
,


 
 
 
 
 
 
 
 
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
g
r
i
d
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


 
 
 
 
 
 
 
 
 
 
{
[
0
,
 
1
,
 
2
]
.
m
a
p
(
(
n
o
d
e
I
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
L
e
a
d
e
r
 
=
 
n
o
d
e
I
d
x
 
=
=
=
 
0
;


 
 
 
 
 
 
 
 
 
 
 
 
/
/
 
f
o
l
l
o
w
e
r
s
 
l
a
g
 
a
 
b
i
t
 
b
e
h
i
n
d
 
f
o
r
 
v
i
s
u
a
l
 
i
n
t
e
r
e
s
t


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
l
a
g
 
=
 
n
o
d
e
I
d
x
 
=
=
=
 
0
 
?
 
0
 
:
 
n
o
d
e
I
d
x
 
=
=
=
 
1
 
?
 
0
 
:
 
1
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
v
i
s
i
b
l
e
E
n
t
r
i
e
s
 
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
 
c
o
m
m
i
t
t
e
d
 
-
 
l
a
g
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
 
k
e
y
=
{
n
o
d
e
I
d
x
}
 
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
 
"
1
2
0
p
x
 
1
f
r
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
 
1
2
 
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
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
L
e
a
d
e
r
 
?
 
<
C
r
o
w
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
3
.
5
 
h
-
3
.
5
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
 
S
D
 
}
}
 
/
>
 
:
 
<
D
a
t
a
b
a
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
 
N
E
U
T
R
A
L
 
}
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
8
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
 
i
s
L
e
a
d
e
r
 
?
 
S
D
 
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
L
e
a
d
e
r
 
?
 
"
L
e
a
d
e
r
"
 
:
 
`
R
e
p
l
i
c
a
 
$
{
n
o
d
e
I
d
x
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
 
6
,
 
f
l
e
x
W
r
a
p
:
 
"
w
r
a
p
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
S
A
M
P
L
E
_
L
O
G
.
m
a
p
(
(
e
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
 
p
r
e
s
e
n
t
 
=
 
i
 
<
 
v
i
s
i
b
l
e
E
n
t
r
i
e
s
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
C
o
m
m
i
t
t
e
d
 
=
 
i
 
<
 
c
o
m
m
i
t
t
e
d
 
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
 
k
e
y
=
{
i
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
e
s
e
n
t
 
&
&
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
y
o
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
c
a
l
e
:
 
0
.
8
,
 
y
:
 
-
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
 
s
c
a
l
e
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
 
s
c
a
l
e
:
 
0
.
8
 
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
2
 
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
6
p
x
 
1
0
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
 
4
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
s
C
o
m
m
i
t
t
e
d
 
?
 
`
$
{
S
D
}
5
5
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
3
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
 
i
s
C
o
m
m
i
t
t
e
d
 
?
 
`
$
{
S
D
}
2
2
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
 
i
s
C
o
m
m
i
t
t
e
d
 
?
 
S
D
 
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
 
N
E
U
T
R
A
L
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
t
{
e
.
t
e
r
m
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
.
c
m
d
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
c
o
m
m
i
t
t
e
d
 
>
=
 
S
A
M
P
L
E
_
L
O
G
.
l
e
n
g
t
h
)
 
s
e
t
C
o
m
m
i
t
t
e
d
(
0
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
P
l
a
y
i
n
g
(
(
p
)
 
=
>
 
!
p
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
S
D
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
S
D
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
:
 
S
D
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
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
y
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
c
o
m
m
i
t
t
e
d
 
>
=
 
S
A
M
P
L
E
_
L
O
G
.
l
e
n
g
t
h
 
?
 
"
r
e
p
l
a
y
"
 
:
 
p
l
a
y
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
p
l
a
y
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
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
P
l
a
y
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
C
o
m
m
i
t
t
e
d
(
0
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
 
"
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
5
)
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


 
 
 
 
 
 
 
 
 
 
 
 
c
o
m
m
i
t
t
e
d
:
 
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
 
c
o
m
m
i
t
t
e
d
 
-
 
1
)
}
<
/
s
p
a
n
>
 
/
 
{
S
A
M
P
L
E
_
L
O
G
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


 
 
 
 
 
 
 
 
 
 
 
 
C
O
M
M
I
T
 
R
U
L
E


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
A
n
 
e
n
t
r
y
 
i
s
 
c
o
m
m
i
t
t
e
d
 
o
n
c
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
 
o
n
 
a
 
m
a
j
o
r
i
t
y
 
o
f
 
n
o
d
e
s
.
 
T
h
e
 
l
i
m
e
-
f
i
l
l
e
d
 
b
o
x
e
s
 
a
b
o
v
e


 
 
 
 
 
 
 
 
 
 
a
r
e
 
c
o
m
m
i
t
t
e
d
;
 
t
h
e
 
b
o
r
d
e
r
e
d
 
o
n
e
s
 
a
r
e
 
r
e
p
l
i
c
a
t
e
d
 
b
u
t
 
n
o
t
 
y
e
t
 
c
o
m
m
i
t
t
e
d
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
4
_
C
o
n
s
e
n
s
u
s
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
e
l
e
c
t
i
o
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
E
l
e
c
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
V
o
t
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
E
l
e
c
t
i
o
n
A
n
i
m
a
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
l
o
g
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
o
g
 
R
e
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
 
i
c
o
n
:
 
<
D
a
t
a
b
a
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
o
g
R
e
p
l
i
c
a
t
i
o
n
 
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
Y
o
u
r
 
R
a
f
t
 
c
l
u
s
t
e
r
 
h
a
s
 
5
 
n
o
d
e
s
.
 
H
o
w
 
m
a
n
y
 
c
a
n
 
f
a
i
l
 
a
t
 
o
n
c
e
 
a
n
d
 
s
t
i
l
l
 
a
c
c
e
p
t
 
w
r
i
t
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
,
 
"
4
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
R
a
f
t
 
n
e
e
d
s
 
a
 
m
a
j
o
r
i
t
y
 
q
u
o
r
u
m
 
(
3
 
o
f
 
5
)
.
 
W
i
t
h
 
2
 
n
o
d
e
s
 
d
o
w
n
,
 
3
 
a
r
e
 
s
t
i
l
l
 
u
p
 
—
 
t
h
a
t
'
s
 
t
h
e
 
m
a
j
o
r
i
t
y
.
 
W
i
t
h
 
3
 
d
o
w
n
,
 
n
o
 
m
a
j
o
r
i
t
y
 
i
s
 
r
e
a
c
h
a
b
l
e
,
 
s
o
 
w
r
i
t
e
s
 
s
t
o
p
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
 
t
e
r
m
 
n
u
m
b
e
r
 
i
n
c
r
e
m
e
n
t
e
d
 
e
v
e
r
y
 
t
i
m
e
 
a
 
n
e
w
 
e
l
e
c
t
i
o
n
 
s
t
a
r
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
T
o
 
m
a
k
e
 
t
e
r
m
s
 
e
a
s
i
e
r
 
t
o
 
r
e
a
d
 
i
n
 
l
o
g
s
.
"
,


 
 
 
 
 
 
 
 
"
T
o
 
p
r
e
v
e
n
t
 
s
t
a
l
e
 
l
e
a
d
e
r
s
 
f
r
o
m
 
c
o
n
t
i
n
u
i
n
g
 
t
o
 
a
c
t
 
a
f
t
e
r
 
a
 
n
e
t
w
o
r
k
 
p
a
r
t
i
t
i
o
n
.
 
F
o
l
l
o
w
e
r
s
 
r
e
j
e
c
t
 
a
n
y
 
R
P
C
 
w
i
t
h
 
a
n
 
o
l
d
e
r
 
t
e
r
m
.
"
,


 
 
 
 
 
 
 
 
"
T
o
 
m
a
t
c
h
 
t
h
e
 
R
a
f
t
 
p
a
p
e
r
.
"
,


 
 
 
 
 
 
 
 
"
T
o
 
t
r
i
g
g
e
r
 
g
a
r
b
a
g
e
 
c
o
l
l
e
c
t
i
o
n
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
e
r
m
s
 
a
r
e
 
m
o
n
o
t
o
n
i
c
.
 
I
f
 
a
n
 
o
l
d
 
l
e
a
d
e
r
 
r
e
t
u
r
n
s
 
f
r
o
m
 
a
 
p
a
r
t
i
t
i
o
n
,
 
i
t
s
 
m
e
s
s
a
g
e
s
 
h
a
v
e
 
a
 
l
o
w
e
r
 
t
e
r
m
 
a
n
d
 
a
r
e
 
r
e
j
e
c
t
e
d
.
 
T
h
i
s
 
i
s
 
w
h
a
t
 
g
u
a
r
a
n
t
e
e
s
 
s
a
f
e
t
y
:
 
a
t
 
m
o
s
t
 
o
n
e
 
l
e
a
d
e
r
 
i
s
 
r
e
c
o
g
n
i
z
e
d
 
p
e
r
 
t
e
r
m
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
 
e
n
t
r
y
 
i
s
 
r
e
p
l
i
c
a
t
e
d
 
t
o
 
2
 
o
f
 
3
 
n
o
d
e
s
 
(
t
h
e
 
l
e
a
d
e
r
 
a
n
d
 
o
n
e
 
f
o
l
l
o
w
e
r
)
.
 
I
s
 
i
t
 
c
o
m
m
i
t
t
e
d
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
,
 
i
t
 
n
e
e
d
s
 
a
l
l
 
3
 
n
o
d
e
s
.
"
,


 
 
 
 
 
 
 
 
"
Y
e
s
 
—
 
2
 
o
f
 
3
 
i
s
 
a
 
m
a
j
o
r
i
t
y
 
q
u
o
r
u
m
,
 
s
o
 
t
h
e
 
e
n
t
r
y
 
i
s
 
c
o
m
m
i
t
t
e
d
 
a
n
d
 
s
a
f
e
 
t
o
 
a
p
p
l
y
.
"
,


 
 
 
 
 
 
 
 
"
O
n
l
y
 
i
f
 
t
h
e
 
l
e
a
d
e
r
 
i
s
 
i
n
 
D
C
-
1
.
"
,


 
 
 
 
 
 
 
 
"
O
n
l
y
 
a
f
t
e
r
 
1
0
0
m
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
Q
u
o
r
u
m
 
i
n
 
a
 
3
-
n
o
d
e
 
c
l
u
s
t
e
r
 
i
s
 
2
.
 
O
n
c
e
 
2
 
n
o
d
e
s
 
h
a
v
e
 
t
h
e
 
e
n
t
r
y
 
(
l
e
a
d
e
r
 
+
 
1
 
f
o
l
l
o
w
e
r
)
,
 
i
t
'
s
 
c
o
m
m
i
t
t
e
d
 
a
n
d
 
c
a
n
 
b
e
 
a
p
p
l
i
e
d
.
 
T
h
e
 
3
r
d
 
n
o
d
e
 
w
i
l
l
 
c
a
t
c
h
 
u
p
 
v
i
a
 
t
h
e
 
n
e
x
t
 
A
p
p
e
n
d
E
n
t
r
i
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
W
h
i
c
h
 
r
e
a
l
-
w
o
r
l
d
 
s
y
s
t
e
m
 
i
s
 
b
u
i
l
t
 
o
n
 
R
a
f
t
 
c
o
n
s
e
n
s
u
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
R
e
d
i
s
"
,
 
"
e
t
c
d
 
(
t
h
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
 
d
a
t
a
s
t
o
r
e
)
"
,
 
"
M
e
m
c
a
c
h
e
d
"
,
 
"
S
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
e
t
c
d
 
u
s
e
s
 
R
a
f
t
 
t
o
 
k
e
e
p
 
t
h
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
 
c
l
u
s
t
e
r
 
s
t
a
t
e
 
c
o
n
s
i
s
t
e
n
t
 
a
c
r
o
s
s
 
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
 
n
o
d
e
s
.
 
C
o
c
k
r
o
a
c
h
D
B
,
 
C
o
n
s
u
l
,
 
a
n
d
 
T
i
K
V
 
a
r
e
 
o
t
h
e
r
 
w
e
l
l
-
k
n
o
w
n
 
R
a
f
t
 
c
o
n
s
u
m
e
r
s
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
C
o
n
s
e
n
s
u
s
 
&
 
L
e
a
d
e
r
 
E
l
e
c
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
4
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
2
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
 
m
e
c
h
a
n
i
s
m
 
b
e
h
i
n
d
 
e
v
e
r
y
 
C
P
 
d
a
t
a
b
a
s
e
'
s
 
l
e
a
d
e
r
 
e
l
e
c
t
i
o
n
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


